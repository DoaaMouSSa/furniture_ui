import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../../customValidation/PasswordValidator';
import { AuthService } from '../../services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,private _authService:AuthService,private _router:Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      retypePassword: ['', [Validators.required]]
    }, { validators: PasswordValidator.matchPassword });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this._authService.register(this.registerForm.value).subscribe(
        response => {
          alert('Registration successful');
          this._router.navigate(['/login']);
        },
        error => {
          console.error('Registration error:', error);
          alert('Registration Failed');

        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
