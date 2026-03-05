import { Injectable, signal } from '@angular/core';
import { Order, CartItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private currentOrder = signal<Order | null>(null);
  private orderHistory = signal<Order[]>([]);

  order = this.currentOrder.asReadonly();
  history = this.orderHistory.asReadonly();

  createOrder(items: CartItem[], subtotal: number, tax: number, total: number): void {
    const order: Order = {
      items,
      subtotal,
      tax,
      total,
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      orderType: 'pickup',
      paymentMethod: 'credit-card',
      status: 'pending'
    };
    this.currentOrder.set(order);
  }

  updateOrderDetails(details: Partial<Order>): void {
    const current = this.currentOrder();
    if (current) {
      this.currentOrder.set({ ...current, ...details });
    }
  }

  submitOrder(): Promise<{ success: boolean; orderId: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const order = this.currentOrder();
        if (order) {
          const confirmedOrder = { ...order, status: 'confirmed' as const };
          this.orderHistory.set([...this.orderHistory(), confirmedOrder]);
          this.currentOrder.set(null);
          resolve({
            success: true,
            orderId: 'AC' + Date.now().toString(36).toUpperCase()
          });
        } else {
          resolve({ success: false, orderId: '' });
        }
      }, 1500);
    });
  }
}
