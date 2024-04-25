import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return[
      '\assets\images\Foods\Biryani-1.jpg',
      '\assets\images\Foods\Butter_Chicken-2.jpg',
      '\assets\images\Foods\Chicken_65-6.jpg',
      '\src\assets\images\Foods\Chicken_Drumsticks-3.jpg',
      '\assets\images\Foods\Chilli_Chicken-4.jpg',
      '\assets\images\Foods\Lamb-5.jpg'
    ]
  }
}
  