import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { MenuService } from '../../services/menu.service';
import { OrderService } from '../../services/order.service';
import { MenuItem } from '../../models/menu-item.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [CurrencyPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  menuItems: MenuItem[] = [];
  categories: string[] = [];

  constructor(
    public cartService: CartService,
    private menuService: MenuService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.menuItems = this.menuService.getMenuItems();
    this.categories = this.menuService.getCategories();
  }

  addToCart(item: MenuItem) {
    this.cartService.addItem(item);
  }

  removeFromCart(itemId: number) {
    this.cartService.removeItem(itemId);
  }

  updateQuantity(itemId: number, quantity: number) {
    this.cartService.updateQuantity(itemId, quantity);
  }

  incrementQuantity(itemId: number) {
    const item = this.cartService.getCartItems().find(i => i.menuItem.id === itemId);
    if (item) {
      this.cartService.updateQuantity(itemId, item.quantity + 1);
    }
  }

  decrementQuantity(itemId: number) {
    const item = this.cartService.getCartItems().find(i => i.menuItem.id === itemId);
    if (item && item.quantity > 1) {
      this.cartService.updateQuantity(itemId, item.quantity - 1);
    } else {
      this.cartService.removeItem(itemId);
    }
  }

  proceedToCheckout() {
    this.orderService.createOrder(
      this.cartService.getCartItems(),
      this.cartService.subtotal(),
      this.cartService.tax(),
      this.cartService.total()
    );
    this.router.navigate(['/checkout']);
  }

  getCategoryEmoji(category: string): string {
    const emojis: Record<string, string> = {
      'Appetizers': '🥘', 'South Indian Specials': '🍛', 'Biryani & Rice': '🍚',
      'Curries': '🥘', 'Breads': '🫓', 'Desserts': '🍮', 'Beverages': '☕'
    };
    return emojis[category] || '🍽️';
  }
}
