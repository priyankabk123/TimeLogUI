import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { APIService } from './api.service';

export const authGuard: CanActivateFn = (route, state) => {
  const apiService = inject(APIService);
  const router = inject(Router);

  if (apiService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
