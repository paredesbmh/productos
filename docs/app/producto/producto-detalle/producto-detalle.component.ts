import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { IproductoDes } from '../../interfaces/IproductoDes';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  producto: IproductoDes;
  pid: string;
  constructor(private route: ActivatedRoute,public _productos: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(parametros =>{
      this.pid = parametros['pid'];
      this._productos.datoProducto(this.pid).subscribe( (producto: IproductoDes) => {
        this.producto = producto;
        console.log(this.pid, producto);
      });
    });
  }

}