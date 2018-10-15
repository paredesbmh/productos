import { Component, OnInit } from '@angular/core';
import { PaginaService } from 'src/app/services/pagina.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor(public _pagina: PaginaService) { }

  ngOnInit() {
  }

}
