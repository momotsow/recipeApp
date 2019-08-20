import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../_core/services';
import { RecipeModel } from '../../_shared/model';
// import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {
  @Input() recipe: RecipeModel = new RecipeModel();

  constructor(private recipeService: RecipeService) { }


  ngOnInit() {
    // this.apiService.addRecipe()
    //   .subscribe((recipe) => {
    //    this.recipes = this.recipes.concat(recipe);
    //   }, (error) => {
    //     console.error('no data');
    //   });
  }

}

