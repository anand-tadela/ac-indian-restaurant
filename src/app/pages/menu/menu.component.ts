import { Component, signal } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
import { MenuItem } from '../../models/menu-item.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CurrencyPipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  categories: string[] = [];
  allItems: MenuItem[] = [];
  filteredItems: MenuItem[] = [];
  activeCategory = signal('All');
  searchQuery = signal('');
  showVegOnly = signal(false);
  addedToCartId = signal<number | null>(null);

  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {
    this.categories = ['All', ...this.menuService.getCategories()];
    this.allItems = this.menuService.getMenuItems();
    this.filteredItems = this.allItems;
  }

  filterByCategory(category: string) {
    this.activeCategory.set(category);
    this.applyFilters();
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
    this.applyFilters();
  }

  toggleVegFilter() {
    this.showVegOnly.update(v => !v);
    this.applyFilters();
  }

  private applyFilters() {
    let items = this.allItems;

    if (this.activeCategory() !== 'All') {
      items = items.filter(i => i.category === this.activeCategory());
    }

    if (this.searchQuery()) {
      const q = this.searchQuery().toLowerCase();
      items = items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q)
      );
    }

    if (this.showVegOnly()) {
      items = items.filter(i => i.isVegetarian);
    }

    this.filteredItems = items;
  }

  addToCart(item: MenuItem) {
    this.cartService.addItem(item);
    this.addedToCartId.set(item.id);
    setTimeout(() => this.addedToCartId.set(null), 1500);
  }

  getCategoryEmoji(category: string): string {
    const emojis: Record<string, string> = {
      'All': '🍽️',
      'Appetizers': '🥘',
      'South Indian Specials': '🍛',
      'Biryani & Rice': '🍚',
      'Curries': '🥘',
      'Breads': '🫓',
      'Desserts': '🍮',
      'Beverages': '☕'
    };
    return emojis[category] || '🍽️';
  }
}
