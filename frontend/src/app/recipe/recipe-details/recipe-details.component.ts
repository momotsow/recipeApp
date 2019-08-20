import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../_core/services';
import { RecipeModel } from '../../_shared/model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: RecipeModel = new RecipeModel();

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('_id'));
      this.recipeService.getRecipe(params.get('_id')).subscribe((recipe: RecipeModel) => {
        console.log(recipe);
        this.recipe = recipe;
      });
    });
  }
}


