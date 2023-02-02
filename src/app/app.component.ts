import { Component, OnInit } from '@angular/core';
// Servicio propio de primeng para generar el efecto de un click expansible en diferentes botones,
// como en los botones del menú y en el elemento "<p-fieldset>" del template "no-comunes.component.html"
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pipesApp';
  nombre = 'fErNando hErReRa';
  valor: number = 1000;
  obj = {
    nombre: 'Fernando',
  };

  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
