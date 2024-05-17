import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SigninRequest } from '../_modelo/signin-request';
import { JwtAuthenticationResponse } from '../_modelo/jwt-authentication-response';
import { entorno } from '../entorno';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router) { }

  autenticar(datos:SigninRequest){
    return this.http.post<JwtAuthenticationResponse>
    (`${entorno.HOSTNAME}/auth/signin`,datos)
  }
  estaLogueado(){
    let token = sessionStorage.getItem(entorno.TOKEN_NAME);
    return token != null;
  }
  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
