import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  constructor(private _http:HttpClient) { }
  private apiUrl=`${environment.apiUrl}`;
  //get
  getData(): Observable<any> {
    return this._http.get<any>(this.apiUrl+"/testimonial/getAll");
  }
  //add
  postData(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
       // 'Content-Type': 'application/json'
      })
    };

    return this._http.post<any>(this.apiUrl+"/testimonial/add", data,httpOptions);
  }
     //get by id
     GetById(id:string): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
         // 'Content-Type': 'application/json'
        })
      };

      return this._http.get<any>(this.apiUrl+"/testimonial/GetById/"+id,httpOptions);
    }
   //update
  updateData(id:string,data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
       // 'Content-Type': 'application/json'
      })
    };

    return this._http.put<any>(this.apiUrl+"/testimonial/update/"+id, data,httpOptions);
  }

   //delete
   deleteData(id: number): Observable<void> {
    return this._http.delete<void>(this.apiUrl+"/testimonial/delete/"+id);
  }
}
