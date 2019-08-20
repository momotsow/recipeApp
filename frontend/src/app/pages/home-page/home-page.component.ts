import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../_core/services';
import { RecipeModel } from '../../_shared/model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  recipes: RecipeModel[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
