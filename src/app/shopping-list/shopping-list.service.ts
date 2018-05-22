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

    add_ingredients(ingredient_name, ingredient_quantity) {
        const new_iname = ingredient_name;
        const new_item_quantity = ingredient_quantity;
        const new_ingredient = new Ingredient(new_iname, new_item_quantity);
        this.ingredients.push(new_ingredient);
    }

}