import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface FoodItem {
  name: string;
  image: string;
  count: number;
}

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {

  searchText: string = '';

   foodItems: FoodItem[] = [
    { name: 'Chicken Pizza', image: 'chicken_pizza.jpg', count: 0 },
    { name: 'Veg Pizza', image: 'veg_pizza.jpg', count: 0 },
    { name: 'Pepperoni Pizza', image: 'pepperoni_pizza.jpg', count: 0 },
    { name: 'Burger', image: 'burger.jpg', count: 0 },
    { name: 'French Fries', image: 'french_fries.jpg', count: 0 },
    { name: 'Salad', image: 'salad.jpg', count: 0 }
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['searchText'] || '';
      this.foodItems = this.foodItems.filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase()));
    });
  }

  addToCart(item: FoodItem): void {
    item.count++;
  }

  removeFromCart(item: FoodItem): void {
    if (item.count > 0) {
      item.count--;
    }
  }
}
