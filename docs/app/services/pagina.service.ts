import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipagina } from '../interfaces/Ipagina';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {
  pagina: Ipagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private httpClient: HttpClient ) {
    this.cargarPagina();
    this.cargarEquipoFB();
  }

  private cargarPagina(){
    console.log('prueba:PaginaService');
    this.httpClient.get('assets/data/pagina.json').subscribe((resp: Ipagina) => {
      this.pagina = resp;
      this.cargada = true;
//              console.log(resp['email']);
      }
    );
  }

  private cargarEquipoFB(){
    console.log('prueba:PaginaService');
    this.httpClient.get('https://sgmdata-ec.firebaseio.com/equipo.json').subscribe((resp: any[]) => {
      this.equipo = resp;
      }
    );
  }

}

