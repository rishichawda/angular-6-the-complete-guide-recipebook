import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  // ingredients: Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Tomato', 10)
  // ];

  ingredients: Ingredient[];

  constructor(private shoppinglist_service: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglist_service.get_ingredients();
  }

  add_to_list(new_item){
    this.ingredients.push(new_item);
  }
}
