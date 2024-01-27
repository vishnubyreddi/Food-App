import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface FoodItem {
  name: string;
  image: string;
  count: number;
  nutrition : nutrition;
}

interface nutrition {
  protien: number;
  calories: number;
  fat: number;
  carbs: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})





export class HomeComponent {

  username: string = 'John Doe'; // Replace with actual username
  searchText: string = '';
  trendingFood: FoodItem[] = [
    { name: 'pizza', image: 'assets/food1.jpeg', count: 0, nutrition: { protien: 12, calories: 300, fat: 15, carbs: 40 } },
    { name: 'burger', image: 'assets/food2.jpeg', count: 0, nutrition: { protien: 8, calories: 500, fat: 25, carbs: 30 } },
    { name: 'sandwich', image: 'assets/food3.jpeg', count: 0, nutrition: { protien: 10, calories: 400, fat: 20, carbs: 35 } },
    // Add more food items as needed
  ];

  addToCart(item: FoodItem): void {
    item.count++;
  }

  removeFromCart(item: FoodItem): void {
    if (item.count > 0) {
      item.count--;
    }
  }

  constructor(private router: Router) {}

  goToCart() {
    // Add your logic or navigation code to the cart page
    this.router.navigateByUrl('/cart');
  }

  search(): void {
    if (this.searchText) {
      this.router.navigate(['/searchFood', this.searchText]);
    }
  }
}
