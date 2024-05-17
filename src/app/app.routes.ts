import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { miGuardiaGuard } from './_servicios/mi-guardia.guard';

export const routes: Routes = [
    {"path":"",redirectTo:"/login",pathMatch:"full"},
    {"path":"login",component: LoginComponent},
    {"path":"contenido",component:ContenidoComponent, canActivate:[miGuardiaGuard]},
];
