import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  current_recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  show_selected_recipe(current_recipe){
    this.current_recipe = current_recipe;
  }

}
