import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(private _http:HttpClient){}
  private apiUrl=`${environment.apiUrl}`;

//get
getData(): Observable<any> {
  return this._http.get<any>(this.apiUrl+"/info/get");
}
 //update
updateData(data: any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
     // 'Content-Type': 'application/json'
    })
  };

  return this._http.put<any>(this.apiUrl+"/info/update/", data,httpOptions);
}
}
