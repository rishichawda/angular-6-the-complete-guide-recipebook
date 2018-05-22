import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // selected_recipe: Recipe;
  @Output('show_recipe') change_recipe = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipe_service: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipe_service.get_recipes();
  }

  change_selected_recipe(new_selected_recipe){
    this.change_recipe.emit(new_selected_recipe);
  }

}
