import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  @Output('on_recipe_select') recipe_select = new EventEmitter<void>();
  @Input() recipe_item: Recipe;

  constructor() { }

  ngOnInit() {
  }

  show_recipe_item(){
    this.recipe_select.emit();
  }
}
