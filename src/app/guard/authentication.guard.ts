import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);
  const _router = inject(Router);

  if(_authService.isAuthenticated()){
    return true;
  }
  else{
    _router.navigate(['/login']);
    return false;
  }
};
