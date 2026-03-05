import { Injectable, signal, computed } from '@angular/core';
import { CartItem, MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  items = this.cartItems.asReadonly();

  itemCount = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  subtotal = computed(() =>
    this.cartItems().reduce((total, item) => total + (item.menuItem.price * item.quantity), 0)
  );

  tax = computed(() => this.subtotal() * 0.08);

  total = computed(() => this.subtotal() + this.tax());

  addItem(menuItem: MenuItem, quantity: number = 1, specialInstructions?: string): void {
    const currentItems = this.cartItems();
    const existingIndex = currentItems.findIndex(item => item.menuItem.id === menuItem.id);

    if (existingIndex >= 0) {
      const updated = [...currentItems];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + quantity
      };
      this.cartItems.set(updated);
    } else {
      this.cartItems.set([...currentItems, { menuItem, quantity, specialInstructions }]);
    }
  }

  removeItem(menuItemId: number): void {
    this.cartItems.set(this.cartItems().filter(item => item.menuItem.id !== menuItemId));
  }

  updateQuantity(menuItemId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeItem(menuItemId);
      return;
    }
    const updated = this.cartItems().map(item =>
      item.menuItem.id === menuItemId ? { ...item, quantity } : item
    );
    this.cartItems.set(updated);
  }

  clearCart(): void {
    this.cartItems.set([]);
  }

  getCartItems(): CartItem[] {
    return this.cartItems();
  }
}
