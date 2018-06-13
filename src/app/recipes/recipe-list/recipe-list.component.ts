import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // selected_recipe: Recipe;
  recipes: Recipe[];

  constructor(private recipe_service: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipe_service.get_recipes();
  }

  create_recipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
