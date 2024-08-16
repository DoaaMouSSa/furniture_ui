import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private _http:HttpClient) { }
  private apiUrl=`${environment.apiUrl}/testimonial/getAll`;
  getData(): Observable<any> {
    return this._http.get<any>(this.apiUrl);
  }
}
