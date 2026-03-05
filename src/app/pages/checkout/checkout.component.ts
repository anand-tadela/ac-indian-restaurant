import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [RouterLink, FormsModule, CurrencyPipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  // Customer details
  customerName = '';
  customerEmail = '';
  customerPhone = '';
  orderType: 'pickup' | 'delivery' = 'pickup';
  address = '';

  // Payment
  paymentMethod: 'credit-card' | 'paypal' = 'credit-card';
  cardNumber = '';
  cardName = '';
  cardExpiry = '';
  cardCvv = '';

  // State
  isProcessing = signal(false);
  orderPlaced = signal(false);
  orderId = signal('');
  currentStep = signal(1);

  constructor(
    public cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    if (this.cartService.itemCount() === 0) {
      this.router.navigate(['/order']);
    }
  }

  nextStep() {
    if (this.currentStep() < 3) {
      this.currentStep.update(s => s + 1);
    }
  }

  prevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
    }
  }

  isStep1Valid(): boolean {
    return this.customerName.trim() !== '' &&
           this.customerEmail.trim() !== '' &&
           this.customerPhone.trim() !== '' &&
           (this.orderType === 'pickup' || this.address.trim() !== '');
  }

  isStep2Valid(): boolean {
    if (this.paymentMethod === 'paypal') return true;
    return this.cardNumber.trim().length >= 15 &&
           this.cardName.trim() !== '' &&
           this.cardExpiry.trim() !== '' &&
           this.cardCvv.trim().length >= 3;
  }

  formatCardNumber(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    input.value = value.substring(0, 19);
    this.cardNumber = input.value;
  }

  formatExpiry(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    input.value = value;
    this.cardExpiry = input.value;
  }

  async placeOrder() {
    this.isProcessing.set(true);

    this.orderService.createOrder(
      this.cartService.getCartItems(),
      this.cartService.subtotal(),
      this.cartService.tax(),
      this.cartService.total()
    );

    this.orderService.updateOrderDetails({
      customerName: this.customerName,
      customerEmail: this.customerEmail,
      customerPhone: this.customerPhone,
      orderType: this.orderType,
      address: this.address,
      paymentMethod: this.paymentMethod
    });

    const result = await this.orderService.submitOrder();

    if (result.success) {
      this.orderId.set(result.orderId);
      this.orderPlaced.set(true);
      this.cartService.clearCart();
    }

    this.isProcessing.set(false);
  }
}
