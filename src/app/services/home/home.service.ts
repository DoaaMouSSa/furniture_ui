import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private _http:HttpClient) { }
  private apiUrl=`${environment.apiUrl}`;
  //get
  getProducts(): Observable<any> {
    return this._http.get<any>(this.apiUrl+"/home/product");
  }
    //get
    getServices(): Observable<any> {
      return this._http.get<any>(this.apiUrl+"/home/service");
    }
      //get
  getTestimonials(): Observable<any> {
    return this._http.get<any>(this.apiUrl+"/home/testimonial");
  }
}
