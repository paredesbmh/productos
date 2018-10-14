import { Component, OnInit } from '@angular/core';
import { PaginaService } from 'src/app/services/pagina.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  constructor(public _pagina: PaginaService) { }

  ngOnInit() {
  }

}
