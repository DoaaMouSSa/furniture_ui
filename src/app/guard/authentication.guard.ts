import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { Router } from 'express';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const _auths=inject(AuthService);
  const _router=inject(Router);

  if(_auths.isAuthenticated()){
    return true;
  }
  else{
    _router.navigate(['/login']);
    return false;
  }

  return true;
};
