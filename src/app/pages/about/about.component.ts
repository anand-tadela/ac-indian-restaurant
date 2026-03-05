import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  traditions = [
    { icon: '🌿', title: 'Tamil Nadu', description: 'The land of crispy dosas, fluffy idlis, and the aromatic filter coffee that starts every morning.' },
    { icon: '🥥', title: 'Kerala', description: 'God\'s Own Country brings us appam, fish curry in coconut milk, and the famous Malabar biryani.' },
    { icon: '🌶️', title: 'Chettinad', description: 'Known for the spiciest cuisine in India, featuring freshly ground masalas and unique flavor combinations.' },
    { icon: '🍚', title: 'Hyderabad', description: 'The city of Nizams gives us the legendary dum biryani, slow-cooked to aromatic perfection.' },
    { icon: '🎭', title: 'Karnataka', description: 'Home to Mysore Masala Dosa, Bisi Bele Bath, and the iconic Mysore Pak sweet.' },
    { icon: '🏺', title: 'Andhra Pradesh', description: 'Famous for its fiery flavors, tangy pickles, and the beloved Hyderabadi cuisine heritage.' }
  ];
}
