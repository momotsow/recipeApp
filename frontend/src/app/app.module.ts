import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './_core/core.module';
import { SharedModule } from './_shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ContactComponent } from './contact/contact.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecipeService } from './_core/services';
import { EnquiryService } from './_core/services';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';

import { RecipeFilterPipe } from './recipe/recipe-filter.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    HeaderComponent,
    RecipeComponent,
    ContactComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    ContactFormComponent,
    HomePageComponent,
    AddRecipeComponent,
    RecipeFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [RecipeService, EnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
