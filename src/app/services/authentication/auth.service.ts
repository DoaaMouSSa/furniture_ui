import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlRegister=`${environment.apiUrl}/auth/register`;
  private apiUrlLogin=`${environment.apiUrl}/auth/login`;
  private isLocalStorage=typeof localStorage !=='undefined';

    constructor(private http : HttpClient) {

      if(this.isLocalStorage)
      {
        const token = localStorage.getItem('token');
        if (token){
          this.tokenSubject.next(token);
        }
      }
    }
    register(userData: any): Observable<any> {
      return this.http.post<any>(this.apiUrlRegister, userData);
    }
    private tokenSubject : BehaviorSubject<string | null> =  new BehaviorSubject< string | null>(null);
    login(userData: any): Observable<any>{
      return this.http.post<any>(this.apiUrlLogin, userData).pipe(tap(res =>{
        const token = res
        if(token){
          localStorage.setItem('token', token);
          this.tokenSubject.next(token);
          const decodedToken=jwtDecode(token)
         // localStorage.setItem('userId', decodedToken.sub);
          //localStorage.setItem('userName', token);

          console.log('Decoded Token:', decodedToken);
        }
     }));

    }
  getToken():Observable<string|null>{
    return this.tokenSubject.asObservable();
  }

  isAuthenticated():boolean{
  return this.tokenSubject.value!==null;
  }

  logOut():void{
    alert('log')
    localStorage.removeItem('token');
    this.tokenSubject.next(null)
    alert(localStorage.getItem('token'))

  }
}
