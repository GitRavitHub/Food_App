import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FoodService } from '../../../services/food/food.service'; 
import { Food } from '../../../shared/models/Food'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  searchTerm: string = '';
  selectedTag: string = '';
  allTags: string[] = [];

  constructor(private foodService: FoodService, private router: Router) { } // Inject Router

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
    this.allTags = this.getAllTags();
  }

  filteredFoods(): Food[] {
    let filteredFoods = this.foods;
    
    if (this.searchTerm) {
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      filteredFoods = filteredFoods.filter(food =>
        food.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    
    if (this.selectedTag) {
      filteredFoods = filteredFoods.filter(food =>
        food.tags?.includes(this.selectedTag) ?? false
      );
    }
    
    return filteredFoods;
  }

  filterByTag(tag: string): void {
    this.selectedTag = tag;
  }

  getAllTags(): string[] {
    const tagsSet = new Set<string>();
    this.foods.forEach(food => {
      food.tags?.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }

  // Method to navigate to the food page
  navigateToFoodPage(): void {
    this.router.navigate(['/food-page']);
  }
}
