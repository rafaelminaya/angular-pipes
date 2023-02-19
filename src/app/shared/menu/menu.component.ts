import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  // ATRIBUTOS
  items: MenuItem[] = [];

  // CONSTRUCTOR
  constructor() {}

  // MÉTODOS
  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/', // http://localhost:4200
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros', // http://localhost:4200/numeros
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes', // http://localhost:4200/no-comunes
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar', // http://localhost:4200/ordenar
      },
    ];
  }
}
