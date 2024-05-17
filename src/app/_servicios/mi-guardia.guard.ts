import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { entorno } from '../entorno';

export const miGuardiaGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  const jwtHelper = inject(JwtHelperService);
  /*return false; */

  //Compreobar si está logeado
  let rpta = loginService.estaLogueado();

  if (!rpta) {
    console.log('no está logeado-false')
    loginService.cerrarSesion();
    return false;
  } else {
    //Verificar si el token no ha expirado
    let token = sessionStorage.getItem(entorno.TOKEN_NAME);
    if (!jwtHelper.isTokenExpired(token)) {
      console.log("no ha expirado el token")
      return true;
    } else {
      loginService.cerrarSesion();
      return false;
    }
  }
};
