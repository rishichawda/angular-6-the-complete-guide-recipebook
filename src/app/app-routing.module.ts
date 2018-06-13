import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDefaultComponent } from './recipes/recipe-default/recipe-default.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const approutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch:'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeDefaultComponent },
        { path: ':id', component: RecipeDetailComponent }
    ] },
    { path: 'shopping', component: ShoppingListComponent }
  ];


@NgModule({
    imports: [
        RouterModule.forRoot(approutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
