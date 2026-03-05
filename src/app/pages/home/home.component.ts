import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
import { MenuItem } from '../../models/menu-item.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  popularItems: MenuItem[] = [];
  testimonials = [
    { name: 'Priya Sharma', text: 'The most authentic South Indian food I have had outside of Chennai! The dosas are perfectly crispy and the sambar is heavenly.', rating: 5 },
    { name: 'Rajesh Kumar', text: 'Incredible Hyderabadi biryani that rivals the best in Hyderabad. The spice levels are perfect and the service is wonderful.', rating: 5 },
    { name: 'Sarah Johnson', text: 'My first time trying South Indian cuisine and I am absolutely hooked! The Chettinad chicken is now my favorite dish.', rating: 5 },
    { name: 'Anand Patel', text: 'A&C brings the true taste of South India. The filter coffee alone is worth the visit. Outstanding quality every time!', rating: 5 }
  ];

  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {
    this.popularItems = this.menuService.getPopularItems();
  }

  addToCart(item: MenuItem) {
    this.cartService.addItem(item);
  }
}
