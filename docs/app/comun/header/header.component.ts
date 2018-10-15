import { Component, OnInit } from '@angular/core';
import { PaginaService } from 'src/app/services/pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _pagina: PaginaService,
    private router: Router) { }

  ngOnInit() {
  }

  buscarProducto( termino: string ){

    if (termino.length < 3){
      return;
    }
    this.router.navigate(['buscar/', termino]);
  }

}
