import { Component, OnInit } from '@angular/core';
import { PaginaService } from 'src/app/services/pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _pagina: PaginaService) { }

  ngOnInit() {
  }

}
