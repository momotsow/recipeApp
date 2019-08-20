import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
// import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';

import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '*', pathMatch: 'full', redirectTo: '' },
  { path: 'header', component: HeaderComponent },
  // { path: 'recipe', component: RecipeListComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'recipe/:_id', component: RecipeDetailsComponent },
  { path: 'addRecipe', component: AddRecipeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
