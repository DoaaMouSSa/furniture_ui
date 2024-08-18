import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  constructor(private _http:HttpClient) { }
  private apiUrl=`${environment.apiUrl}/statis/count`;
  getData(): Observable<any> {
    return this._http.get<any>(this.apiUrl);
  }
}
