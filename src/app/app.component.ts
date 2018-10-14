import { Component } from '@angular/core';
import { PaginaService } from './services/pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _paginaService: PaginaService,
    public _productosService: ProductosService){

  }
}
