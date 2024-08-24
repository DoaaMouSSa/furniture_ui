import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private _http:HttpClient) { }
  private apiUrl=`${environment.apiUrl}`;
  //get
  getData(): Observable<any> {
    return this._http.get<any>(this.apiUrl+"/service/getAll");
  }
  //add
  postData(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
       // 'Content-Type': 'application/json'
      })
    };

    return this._http.post<any>(this.apiUrl+"/service/add", data,httpOptions);
  }
     //get by id
     GetById(id:string): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
         // 'Content-Type': 'application/json'
        })
      };

      return this._http.get<any>(this.apiUrl+"/service/GetById/"+id,httpOptions);
    }
   //update
  updateData(id:string,data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
       // 'Content-Type': 'application/json'
      })
    };

    return this._http.put<any>(this.apiUrl+"/service/update/"+id, data,httpOptions);
  }

   //delete
   deleteData(id: number): Observable<void> {
    return this._http.delete<void>(this.apiUrl+"/service/delete/"+id);
  }
}
