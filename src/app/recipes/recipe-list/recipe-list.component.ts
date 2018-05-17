import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // selected_recipe: Recipe;
  @Output('show_recipe') change_recipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Sample Recipe', 'This is the description of a sample recipe', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/skillet-chicken-roasted-potatoes-carrots-ck.jpg?itok=dzdpIO4s'),
    new Recipe('Another Sample Recipe', 'This is the description of another sample recipe', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis')
  ];

  constructor() { }

  ngOnInit() {
  }

  change_selected_recipe(new_selected_recipe){
    this.change_recipe.emit(new_selected_recipe);
  }

}
