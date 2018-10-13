import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto/producto.component';
import { AcercaComponent } from './admin/acerca/acerca.component';
import { ProductoDetalleComponent } from './producto/producto-detalle/producto-detalle.component';

const app_routes: Routes = [
  { path: '', component: ProductoComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'item', component: ProductoDetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true } )],
  exports: [RouterModule]
})

export class AppRouting {}
