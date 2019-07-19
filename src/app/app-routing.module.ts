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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
