import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show_recipesection: boolean = true;

  show_recipe_section(event){
    this.show_recipesection = event.show_recipesection;
    
  }
  
  show_shoplist_section(event){
    this.show_recipesection = event.show_recipesection;
  }

}
