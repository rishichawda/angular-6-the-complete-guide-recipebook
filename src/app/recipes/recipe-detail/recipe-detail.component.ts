import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {

  recipe_id: number;
  recipe: Recipe;

  constructor(private recipe_service: RecipeService,
              private shoppinglist_service: ShoppingListService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe_id = +params['id'];
        this.recipe = this.recipe_service.get_recipe(this.recipe_id);
      }
    );
  }

  on_edit_recipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.recipe_id, 'edit'], {relativeTo: this.route})
  }

  send_to_shoplist() {
    this.shoppinglist_service.add_ingredients_list(this.recipe.ingredients);
  }

}
