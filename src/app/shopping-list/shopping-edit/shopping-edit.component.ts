import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('iname_input') ingredient_name: ElementRef;
  @ViewChild('iquantity_input') ingredient_quantity: ElementRef;

  constructor(private shoppinglist_service: ShoppingListService) { }

  ngOnInit() {
  }

  add_ingredients() {
    const new_iname = this.ingredient_name.nativeElement.value;
    const new_item_quantity = this.ingredient_quantity.nativeElement.value;
    const new_ingredient = new Ingredient(new_iname, new_item_quantity);
    this.shoppinglist_service.add_ingredients(new_ingredient);
  }

  clear_input() {
    this.ingredient_name.nativeElement.value = '';
    this.ingredient_quantity.nativeElement.value = '';
  }

}
