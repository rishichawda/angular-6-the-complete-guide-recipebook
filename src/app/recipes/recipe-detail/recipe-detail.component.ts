import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipe_detail') recipe: Recipe;

  constructor(private shoppinglist_service: ShoppingListService) { }

  ngOnInit() {
  }

  send_to_shoplist() {
    // for (var i in this.recipe.ingredients) {
    //   this.shoppinglist_service.add_ingredients(this.recipe.ingredients[i]);
    // }
    this.shoppinglist_service.add_ingredients_list(this.recipe.ingredients);
  }

}
