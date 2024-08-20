import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
   loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private _authService:AuthService,private _router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe(
        response => {
          const token = localStorage.getItem('token');
          this._router.navigate(['/dashboard/product/index']);
        },
        error => {
          console.error('Registration error:', error);
          // Handle registration error
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
