import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('iname_input') ingredient_name: ElementRef;
  @ViewChild('iquantity_input') ingredient_quantity: ElementRef;

  @Output('on_add_newingredient') on_add_ingredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  add_ingredients() {
    const new_iname = this.ingredient_name.nativeElement.value;
    const new_item_quantity = this.ingredient_quantity.nativeElement.value;
    const new_ingredient = new Ingredient(new_iname, new_item_quantity);
    this.on_add_ingredient.emit(new_ingredient);
  }

  clear_input() {
    this.ingredient_name.nativeElement.value = '';
    this.ingredient_quantity.nativeElement.value = '';
  }

}
