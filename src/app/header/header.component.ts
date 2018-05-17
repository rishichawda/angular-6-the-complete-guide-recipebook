import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})

export class HeaderComponent {

    @Output('on_recipebtn_click') recipebuttonclick = new EventEmitter<{show_recipesection: boolean}>();
    @Output('on_shoplist_click') shopbuttonclick = new EventEmitter<{show_recipesection: boolean}>();

    onclick_recipebutton(){
        this.recipebuttonclick.emit({show_recipesection: true});
    }
    
    onclick_shopbutton(){
        this.shopbuttonclick.emit({show_recipesection: false});
    }

}