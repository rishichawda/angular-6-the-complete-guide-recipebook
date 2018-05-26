import { Recipe } from './recipes.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private current_recipe: Recipe;
    private recipes: Recipe[] = [
        new Recipe(
            'Sample Recipe',
            'This is the description of a sample recipe',
            'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/skillet-chicken-roasted-potatoes-carrots-ck.jpg?itok=dzdpIO4s',
            [
                new Ingredient('Meat', 2),
                new Ingredient('Carrot', 7)
            ]
        ),
        new Recipe('Another Sample Recipe',
            'This is the description of another sample recipe',
            'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis',
            [
                new Ingredient('Chicken', 2),
                new Ingredient('Spinach', 2)
            ]
        )
      ];

      recipe_selected = new EventEmitter<Recipe>();

    get_recipes() {
        // sclice method call ensures we pass a copy of the reference of original recipe array and not the actual reference so that it cannot be accessed from outside.
        return this.recipes.slice();
    }

    get_current_recipe() {
        return this.current_recipe;
    }

    change_current_recipe(recipe: Recipe) {
        this.current_recipe = recipe;
        this.recipe_selected.emit(recipe);
    }
}
