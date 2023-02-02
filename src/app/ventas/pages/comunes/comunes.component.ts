import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styles: [],
})
export class ComunesComponent {
  nombreLower: string = 'fernando';
  nombreUpper: string = 'FERNANDO';
  nombreCompleto: string = 'FerNAnDo HerRerA';

  // new Date() : La instancia toma nuestra zona horaria e información actual de la computadora
  fecha: Date = new Date(); // fecha de hoy
}
