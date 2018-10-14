import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproducto } from '../interfaces/Iproducto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  items: Iproducto[] = [];
  cargado = true;

  constructor(private httpClient: HttpClient) { 
    this.cargarProductosFB();
  }

  private cargarProductosFB() {
    console.log('prueba:PaginaService');
    this.httpClient.get('https://sgmdata-ec.firebaseio.com/productos_idx.json').subscribe((resp: Iproducto[]) => {
      this.items = resp;
      setTimeout(() => {
        console.log(resp);
        this.cargado = false;
      }, 10);
    }
    );
  }

}
