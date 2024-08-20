import { Component } from '@angular/core';
import { AuthService } from '../../../services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css'
})
export class HeaderAdminComponent {
constructor(private _authService:AuthService,private _router:Router) {}
logout(){
  this._authService.logOut();
  this._router.navigate(['/login'])
}
}
