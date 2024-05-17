import { Component } from '@angular/core';
import { JwtAuthenticationResponse } from '../_modelo/jwt-authentication-response';
import { SigninRequest } from '../_modelo/signin-request';
import { LoginService } from '../_servicios/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { entorno } from '../entorno';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  respuesta:JwtAuthenticationResponse={
    token:""
  }

  datos:SigninRequest={
    email:"",
    password:""
  }
  constructor(private servicio:LoginService, private router:Router){}

  autenticar() {
    this.servicio.autenticar(this.datos)
      .subscribe((data) => {
        console.log("token->"+data.token);
        sessionStorage.setItem(entorno.TOKEN_NAME, data.token);      
        this.router.navigate(['/contenido'])
      }
    );
  }
}
