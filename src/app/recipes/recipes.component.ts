import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  current_recipe: Recipe;

  constructor(private recipe_service: RecipeService) { }

  ngOnInit() {
    this.current_recipe = this.recipe_service.get_current_recipe();
    this.recipe_service.recipe_selected
      .subscribe(
        (recipe: Recipe) => {
          this.current_recipe = recipe;
        }
    );
  }


}
