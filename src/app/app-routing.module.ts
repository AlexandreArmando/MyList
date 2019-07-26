import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cocktails', loadChildren: './cocktails/cocktails.module#CocktailsPageModule' },
  { path: 'receipes', loadChildren: './receipes/receipes.module#ReceipesPageModule' },
  { path: 'lists', loadChildren: './lists/lists.module#ListsPageModule' },
  { path: 'todos', loadChildren: './todos/todos.module#TodosPageModule' },
  { path: 'keypass', loadChildren: './keypass/keypass.module#KeypassPageModule' },
  { path: 'add-item-to-list', loadChildren: './add-item-to-list/add-item-to-list.module#AddItemToListPageModule' },
  { path: 'add-keypass', loadChildren: './add-keypass/add-keypass.module#AddKeypassPageModule' },
  { path: 'add-cocktail', loadChildren: './add-cocktail/add-cocktail.module#AddCocktailPageModule' },
  { path: 'add-ingredient', loadChildren: './add-ingredient/add-ingredient.module#AddIngredientPageModule' },
  { path: 'add-an-alcool', loadChildren: './add-an-alcool/add-an-alcool.module#AddAnAlcoolPageModule' },
  { path: 'add-an-other', loadChildren: './add-an-other/add-an-other.module#AddAnOtherPageModule' },
  { path: 'add-a-soft', loadChildren: './add-a-soft/add-a-soft.module#AddASoftPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
