import { Component, OnInit } from '@angular/core';
import foodsList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  myList: {
    name: string;
    calories: number;
    quantity: number;
    image: string;
  }[] = [];
  pattern: string;
  isEditing: boolean = false;
  newFoodName: string = 'Food Name';
  newFoodCalories: number = 98;
  newFoodImage: string = 'https://pngimg.com/uploads/milk/milk_PNG12762.png';
  quantity: number;
  totalCalories: number = 0;

  constructor() {}

  ngOnInit() {
    this.foods = foodsList;
  }

  enableUserToAddFood() {
    this.isEditing = !this.isEditing;
  }

  newFood() {
    const newFood = {
      name: this.newFoodName,
      calories: this.newFoodCalories,
      image: this.newFoodImage,
      quantity: 0
    };

    this.foods.unshift(newFood);

    this.isEditing = true;
    this.newFoodName = '';
    this.newFoodCalories = null;
    this.newFoodImage = '';
  }

  addToMyList(food, quantityInput) {
    const existingFood = this.myList.find(item => item.name === food.name);
    const quantity = Number(quantityInput.value);

    if (existingFood) {
      existingFood.quantity += quantity;
    } else {
      food.quantity = quantity;
      this.myList.push(food);
    }
    this.totalCalories += food.calories * quantity;
    this.quantity = 1;
  }
}