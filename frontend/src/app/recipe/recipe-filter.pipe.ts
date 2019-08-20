import { Pipe, PipeTransform } from '@angular/core';
import { RecipeModel } from '../_shared/model/recipe.model';


@Pipe({
  name: 'recipefilter'
})

export class RecipeFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
    return items.filter(item => item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}
