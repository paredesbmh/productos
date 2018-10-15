import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproducto } from '../interfaces/Iproducto';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  items: Iproducto[] = [];
  itemsFiltrado: Iproducto[] = [];
  cargado = true;

  constructor(private httpClient: HttpClient) {
    this.cargarProductosFB();
  }

  private cargarProductosFB() {
    return new Promise( ( resolve , reject) => {

      this.httpClient.get('https://sgmdata-ec.firebaseio.com/productos_idx.json').subscribe((resp: Iproducto[]) => {
        this.items = resp;
        setTimeout(() => {
          console.log(resp);
          this.cargado = false;
        }, 10);
      }
      );

    });
  }

  datoProducto(id: string){
    return this.httpClient.get(`https://sgmdata-ec.firebaseio.com/productos/${id}.json`);

  }

  buscarProductos(termino: string) {
  if (this.items.length === 0) {
    this.cargarProductosFB().then( () => {
      this.filtrarProductos(termino);
    });
  } else {
    this.filtrarProductos(termino);
  }

  }

  filtrarProductos(termino: string) {
/*
    this.itemsFiltrado = this.items.filter( producto => {
      return true;
    });
*/
    termino = termino.toLowerCase();
    this.itemsFiltrado = [];
    this.items.forEach( prod => {
      const tituloLower: any = prod.titulo.toLocaleLowerCase;
      if ( (prod.categoria.indexOf( termino ) >= 0) || (prod.titulo.indexOf( termino ) >= 0) ) {
          this.itemsFiltrado.push( prod );
      }
    });
    console.log('this.itemsFiltrado' , this.itemsFiltrado);
  }

}
