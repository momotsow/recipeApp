import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecipeService } from '../../_core/services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  addRecipeForm: FormGroup;

  constructor(public fb: FormBuilder, private recipeService: RecipeService) {
    this.addRecipeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      ingredients: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit() { }

  submitForm() {
    if (this.addRecipeForm.valid) {
      this.recipeService.addRecipe(this.addRecipeForm.value)
        .subscribe((response) => {
          console.log(response);
        }, (err) => {
          console.error(err);
        });
    } else {
      alert('please fill in the form');
    }
  }
  getImage($event) {
    this.addRecipeForm.controls.image.setValue($event.target.files[0]);
  }

//   formData.append('image[]', myFileInput.files[0]);
// formData.append('image[]', myFileInput.files[1]);

}

