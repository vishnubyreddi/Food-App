import { Component } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  calculateTotal(): void {
    const foodItems = document.getElementsByClassName('food-item');
    let totalCost = 0;

    for (let i = 0; i < foodItems.length; i++) {
      const priceElement = foodItems[i].querySelector('.price') as HTMLElement;
      const quantityElement = foodItems[i].querySelector('.quantity input') as HTMLInputElement;
    
      if (priceElement && quantityElement) {
        const price = parseFloat(priceElement.innerText.replace('$', ''));
        const quantity = parseInt(quantityElement.value, 10);
    
        const itemCost = price * quantity;
        totalCost += itemCost;
      }
    }
    
    

    const totalInput = document.getElementById('total') as HTMLInputElement;
    totalInput.value = '$' + totalCost.toFixed(2);
  }

  incrementQuantity(button: HTMLButtonElement): void {
    const quantityInput = button.parentNode?.querySelector('input') as HTMLInputElement;
    quantityInput.value = (parseInt(quantityInput.value, 10) + 1).toString();
    this.calculateTotal();
  }

  decrementQuantity(button: HTMLButtonElement): void {
    const quantityInput = button.parentNode?.querySelector('input') as HTMLInputElement;
    if (quantityInput && parseInt(quantityInput.value, 10) > 0) {
      quantityInput.value = (parseInt(quantityInput.value, 10) - 1).toString();
      this.calculateTotal();
    }
  }
}