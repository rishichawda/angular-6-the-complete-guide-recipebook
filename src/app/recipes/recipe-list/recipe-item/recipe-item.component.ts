import {
   Component,
   OnInit,
   Input,
   Output,
  //  EventEmitter
  } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Output('on_recipe_select') recipe_select = new EventEmitter<void>();
  @Input() recipe_item: Recipe;
  @Input() index: number;

  constructor(private recipe_service: RecipeService) { }

  ngOnInit() {
  }

  show_recipe_item() {
    // this.recipe_select.emit();
    this.recipe_service.change_current_recipe(this.recipe_item);
  }
}
