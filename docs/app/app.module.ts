import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comun/header/header.component';
import { PieComponent } from './comun/pie/pie.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { AcercaComponent } from './admin/acerca/acerca.component';
import { ProductoDetalleComponent } from './producto/producto-detalle/producto-detalle.component';
import { AppRouting } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { BuscarComponent } from './producto/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PieComponent,
    ProductoComponent,
    AcercaComponent,
    ProductoDetalleComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
