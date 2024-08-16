import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }
  private apiUrl=`${environment.apiUrl}/product/getAll`;
  getData(): Observable<any> {
    return this._http.get<any>(this.apiUrl);
  }
  postData(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._http.post<any>(this.apiUrl, data, httpOptions);
  }
}
