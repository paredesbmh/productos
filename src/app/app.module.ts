import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comun/header/header.component';
import { PieComponent } from './comun/pie/pie.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { AcercaComponent } from './admin/acerca/acerca.component';
import { ProductoDetalleComponent } from './producto/producto-detalle/producto-detalle.component';
import { AppRouting } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PieComponent,
    ProductoComponent,
    AcercaComponent,
    ProductoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
