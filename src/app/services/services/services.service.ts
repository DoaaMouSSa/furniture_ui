import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http:HttpClient) { }
  private apiUrl = 'http://localhost:3000/services/add'; // Update with your API endpoint

   // Method to add
   addService(service: any): Observable<any> {
    return this._http.post<any>(this.apiUrl, service);
  }
  // private url=`${environment.apiUrl}/services/add`;
  // addService(formData:FormData):Observable<any>{
  //  return this._http.post(this.url,formData);
  // }
  // updateService(formData:FormData):Observable<any>{
  //   return this._http.put(this.url,formData);
  //  }
  //  deleteService(formData:FormData):Observable<any>{
  //   return this._http.delete(this.url);
  //  }
  //  getServices(formData:FormData):Observable<any>{
  //   return this._http.get(this.url);
  //  }
}
