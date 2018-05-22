import { Recipe } from "./recipes.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Sample Recipe', 'This is the description of a sample recipe', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/skillet-chicken-roasted-potatoes-carrots-ck.jpg?itok=dzdpIO4s'),
        new Recipe('Another Sample Recipe', 'This is the description of another sample recipe', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis')
      ];

      recipe_selected = new EventEmitter<Recipe>();
    
    get_recipes() {
        return this.recipes.slice(); // sclice method call ensures we pass a copy of the reference of original recipe array and not the actual reference so that it cannot be accessed from outside.
    }
}