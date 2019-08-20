import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnquiryModel } from '../../_shared/model';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})

export class EnquiryService {
  enquiries: EnquiryModel[] = [];
  // contacts: Contact[];

  constructor(private http: HttpClient) { }


  contact(details: any): Observable<any> {
    return this.http.post(API_URL + '/enquiries', details);
  }


  // contact(contact: Contact){
  //   return this.http.post(`${API_URL + '/enquiries'}`, contact);
  // }

  // private headers(): HttpHeaders {
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  // }

}


