import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../_shared/model';
import { RecipeService } from '../_core/services';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  searchText = '';
  @Input() recipes: RecipeModel[] = [];


  constructor(private recipeService: RecipeService) { }

  searchRecipes(query: string) {
    return this.recipeService.getRecipe(query).subscribe(
      data => console.log(data),
      error => console.log(error),

    );
  }
  ngOnInit() {

    this.recipeService.getRecipes()
      .subscribe((result: RecipeModel[]) => {
        this.recipes = result;
      }, (error) => {
        console.error('no data');
      });

  }
}
