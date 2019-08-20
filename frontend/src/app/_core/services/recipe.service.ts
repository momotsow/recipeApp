
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../_shared/model';

import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})


export class RecipeService {
  recipes: RecipeModel[] = [];


  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any> {
    return this.http.get(API_URL + '/recipes');

  }

  getRecipe(_id: string): Observable<any> {
    return this.http.get(`${API_URL + '/recipes'}/${_id}`);
  }

  addRecipe(details: any): Observable<any> {
    const formData: FormData = new FormData();
    for (const key in details) {
      if (details.hasOwnProperty(key)) {
        formData.append(key, details[key]);
      }
  }
    console.log(details);
    console.log(formData);
    return this.http.post(API_URL + '/recipes', formData);
  }

  // private headers(): HttpHeaders {
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  // }

}
