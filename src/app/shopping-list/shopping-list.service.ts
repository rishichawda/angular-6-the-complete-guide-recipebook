import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
      ];

    new_ingredient_added = new EventEmitter();

    get_ingredients() {
        return this.ingredients.slice();
    }

    add_ingredients(new_ingredient: Ingredient) {
        this.ingredients.push(new_ingredient);
    }

}