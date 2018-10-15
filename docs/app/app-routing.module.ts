import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto/producto.component';
import { AcercaComponent } from './admin/acerca/acerca.component';
import { ProductoDetalleComponent } from './producto/producto-detalle/producto-detalle.component';
import { BuscarComponent } from './producto/buscar/buscar.component';

const app_routes: Routes = [
  { path: '', component: ProductoComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'item/:pid', component: ProductoDetalleComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true } )],
  exports: [RouterModule]
})

export class AppRouting {}
