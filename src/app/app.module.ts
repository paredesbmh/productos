import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comun/header/header.component';
import { PieComponent } from './comun/pie/pie.component';
import { ProductoComponent } from './producto/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PieComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
