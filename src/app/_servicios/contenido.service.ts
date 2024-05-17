import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { entorno } from '../entorno';
import { Contenido } from '../_modelo/contenido';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(private http:HttpClient) { }

  obtenerContenido():Observable<Contenido> {
    return this.http.get<Contenido>(`${entorno.HOSTNAME}/resource`)
  }
}
