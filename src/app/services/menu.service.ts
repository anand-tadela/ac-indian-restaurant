import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: MenuItem[] = [
    // Appetizers
    {
      id: 1, name: 'Masala Dosa', description: 'Crispy golden crepe made from rice and lentil batter, filled with spiced potato masala, served with sambar and chutneys',
      price: 12.99, category: 'Appetizers', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false, isPopular: true
    },
    {
      id: 2, name: 'Medu Vada', description: 'Crispy golden lentil donuts made with urad dal, seasoned with black pepper and curry leaves, served with sambar and coconut chutney',
      price: 10.99, category: 'Appetizers', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },
    {
      id: 3, name: 'Idli Sambar', description: 'Soft, fluffy steamed rice cakes served with aromatic sambar and fresh coconut chutney',
      price: 10.99, category: 'Appetizers', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop&q=80', isVegetarian: true, isSpicy: false, isPopular: true
    },
    {
      id: 4, name: 'Onion Pakora', description: 'Crispy fritters made with thinly sliced onions in a spiced chickpea batter, deep fried to golden perfection',
      price: 11.99, category: 'Appetizers', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: true
    },
    {
      id: 5, name: 'Chicken 65', description: 'Spicy, deep-fried chicken bites marinated in a fiery blend of red chilies, ginger, and aromatic spices',
      price: 14.99, category: 'Appetizers', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop', isVegetarian: false, isSpicy: true, isPopular: true
    },
    {
      id: 6, name: 'Paneer Tikka', description: 'Cubes of cottage cheese marinated in yogurt and spices, grilled to smoky perfection in the tandoor',
      price: 13.99, category: 'Appetizers', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },

    // South Indian Specials
    {
      id: 7, name: 'Rava Dosa', description: 'Thin, crispy crepe made from semolina batter with onions, cashews, and fresh herbs',
      price: 13.99, category: 'South Indian Specials', image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },
    {
      id: 8, name: 'Mysore Masala Dosa', description: 'Crispy dosa spread with spicy red chutney, filled with potato masala, a Mysore specialty',
      price: 14.99, category: 'South Indian Specials', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop&q=90', isVegetarian: true, isSpicy: true, isPopular: true
    },
    {
      id: 9, name: 'Uttapam', description: 'Thick, savory pancake topped with onions, tomatoes, green chilies, and fresh cilantro',
      price: 12.99, category: 'South Indian Specials', image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },
    {
      id: 10, name: 'Pongal', description: 'Comforting South Indian dish of rice and lentils tempered with black pepper, cumin, cashews, and ghee',
      price: 11.99, category: 'South Indian Specials', image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },
    {
      id: 11, name: 'Chettinad Chicken', description: 'Fiery chicken curry from the Chettinad region, prepared with freshly ground spices and coconut',
      price: 16.99, category: 'South Indian Specials', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop', isVegetarian: false, isSpicy: true, isPopular: true
    },
    {
      id: 12, name: 'Appam with Stew', description: 'Lacy, bowl-shaped rice crepes served with a fragrant coconut milk vegetable stew from Kerala',
      price: 14.99, category: 'South Indian Specials', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },

    // Biryani & Rice
    {
      id: 13, name: 'Hyderabadi Chicken Biryani', description: 'Fragrant basmati rice layered with succulent chicken, saffron, and aromatic spices, slow-cooked in the dum style',
      price: 17.99, category: 'Biryani & Rice', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop', isVegetarian: false, isSpicy: true, isPopular: true
    },
    {
      id: 14, name: 'Vegetable Biryani', description: 'Aromatic basmati rice cooked with seasonal vegetables, saffron, and whole spices',
      price: 14.99, category: 'Biryani & Rice', image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },
    {
      id: 15, name: 'Goat Biryani', description: 'Tender goat pieces layered with aromatic basmati rice, caramelized onions, and royal spices',
      price: 19.99, category: 'Biryani & Rice', image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&h=300&fit=crop', isVegetarian: false, isSpicy: true
    },
    {
      id: 16, name: 'Lemon Rice', description: 'Tangy and flavorful rice tempered with mustard seeds, curry leaves, peanuts, and fresh lemon juice',
      price: 11.99, category: 'Biryani & Rice', image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },

    // Curries
    {
      id: 17, name: 'Sambar', description: 'Classic South Indian lentil stew with drumstick, vegetables, tamarind, and aromatic spice blend',
      price: 12.99, category: 'Curries', image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },
    {
      id: 18, name: 'Rasam', description: 'Hot and tangy South Indian soup made with tamarind, tomatoes, pepper, and fresh herbs',
      price: 10.99, category: 'Curries', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: true
    },
    {
      id: 19, name: 'Chicken Curry', description: 'Tender chicken simmered in a rich, aromatic curry sauce with onions, tomatoes, and South Indian spices',
      price: 15.99, category: 'Curries', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop', isVegetarian: false, isSpicy: true
    },
    {
      id: 20, name: 'Paneer Butter Masala', description: 'Soft paneer cubes in a velvety, mildly spiced tomato-cream sauce with a touch of fenugreek',
      price: 15.99, category: 'Curries', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop&q=90', isVegetarian: true, isSpicy: false, isPopular: true
    },
    {
      id: 21, name: 'Fish Curry (Kerala Style)', description: 'Fresh fish simmered in a tangy coconut and tamarind sauce with curry leaves, a Kerala delicacy',
      price: 17.99, category: 'Curries', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop', isVegetarian: false, isSpicy: true
    },
    {
      id: 22, name: 'Dal Tadka', description: 'Yellow lentils tempered with ghee, cumin, garlic, and dried red chilies',
      price: 12.99, category: 'Curries', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },

    // Breads
    {
      id: 23, name: 'Naan', description: 'Soft, pillowy leavened bread baked in our traditional tandoor oven',
      price: 10.99, category: 'Breads', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&q=85', isVegetarian: true, isSpicy: false
    },
    {
      id: 24, name: 'Garlic Naan', description: 'Tandoor-baked naan topped with fresh garlic, butter, and cilantro',
      price: 11.99, category: 'Breads', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false, isPopular: true
    },
    {
      id: 25, name: 'Parotta', description: 'Flaky, layered South Indian flatbread, perfect for scooping up curries and gravies',
      price: 11.99, category: 'Breads', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },
    {
      id: 26, name: 'Chapati', description: 'Whole wheat flatbread cooked on a griddle, a staple of Indian cuisine',
      price: 10.99, category: 'Breads', image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },

    // Desserts
    {
      id: 27, name: 'Gulab Jamun', description: 'Soft, melt-in-your-mouth milk dumplings soaked in rose-flavored sugar syrup',
      price: 10.99, category: 'Desserts', image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false, isPopular: true
    },
    {
      id: 28, name: 'Payasam', description: 'Traditional South Indian dessert of vermicelli or rice cooked in sweetened milk with cardamom, cashews, and raisins',
      price: 10.99, category: 'Desserts', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },
    {
      id: 29, name: 'Mysore Pak', description: 'Rich, melt-in-your-mouth fudge made from gram flour, ghee, and sugar, a royal Mysore confection',
      price: 11.99, category: 'Desserts', image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },
    {
      id: 30, name: 'Rasmalai', description: 'Delicate cottage cheese patties immersed in sweetened, cardamom-infused milk, garnished with pistachios',
      price: 11.99, category: 'Desserts', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },

    // Beverages
    {
      id: 31, name: 'Masala Chai', description: 'Authentic Indian spiced tea brewed with cardamom, cinnamon, ginger, and cloves in whole milk',
      price: 10.99, category: 'Beverages', image: 'https://images.unsplash.com/photo-1561336526-2914f13ceb36?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false, isPopular: true
    },
    {
      id: 32, name: 'Filter Coffee', description: 'Strong, aromatic South Indian coffee made with freshly ground beans, brewed through a traditional metal filter',
      price: 10.99, category: 'Beverages', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false, isPopular: true
    },
    {
      id: 33, name: 'Mango Lassi', description: 'Refreshing yogurt-based smoothie blended with ripe Alphonso mangoes and a hint of cardamom',
      price: 11.99, category: 'Beverages', image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    },
    {
      id: 34, name: 'Rose Falooda', description: 'Exotic layered drink with rose syrup, vermicelli, basil seeds, ice cream, and chilled milk',
      price: 12.99, category: 'Beverages', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop', isVegetarian: true, isSpicy: false
    }
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  getCategories(): string[] {
    return [...new Set(this.menuItems.map(item => item.category))];
  }

  getItemsByCategory(category: string): MenuItem[] {
    return this.menuItems.filter(item => item.category === category);
  }

  getPopularItems(): MenuItem[] {
    return this.menuItems.filter(item => item.isPopular);
  }

  getItemById(id: number): MenuItem | undefined {
    return this.menuItems.find(item => item.id === id);
  }

  searchItems(query: string): MenuItem[] {
    const lowerQuery = query.toLowerCase();
    return this.menuItems.filter(item =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );
  }
}
