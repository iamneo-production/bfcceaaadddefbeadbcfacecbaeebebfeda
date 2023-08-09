import { Component } from '@angular/core';

interface Food {
  name: string;
  calories: number;
  image: string;
  quantity?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pattern: string;
  newFoodName: string;
  newFoodCalories: number;
  newFoodImage: string;
  isEditing: boolean = false;
  foods: Food[] = [];
  myList: Food[] = [];

  enableUserToAddFood() {
    this.isEditing = true;
  }

  newFood() {
    const newFood: Food = {
      name: this.newFoodName,
      calories: this.newFoodCalories,
      image: this.newFoodImage
    };

    this.foods.push(newFood);
    this.newFoodName = '';
    this.newFoodCalories = null;
    this.newFoodImage = '';
    this.isEditing = false;
  }

  addToMyList(food: Food, quantityInput: HTMLInputElement) {
    const quantity = parseInt(quantityInput.value);
    const foodWithQuantity: Food = { ...food, quantity };
    this.myList.push(foodWithQuantity);
    quantityInput.value = '1';
  }

  calculateTotalCalories() {
    let totalCalories = 0;
    for (const food of this.myList) {
      totalCalories += food.calories * (food.quantity || 1);
    }
    return totalCalories;
  }
}