import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http:HttpClient) { }
  private apiUrl=`${environment.apiUrl}/services/add`;
  addService(service: any):Observable<any>{
   return this._http.post(this.apiUrl,service);
  }


}
