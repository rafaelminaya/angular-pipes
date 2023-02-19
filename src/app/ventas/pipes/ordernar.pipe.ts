import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordernar',
})
export class OrdernarPipe implements PipeTransform {
  transform(
    value: Heroe[],
    argumentoOrdenarPor: string = 'sin valor'
  ): Heroe[] {
    // sort() : Función de JS que recibe una funcion comparativa para ordenar un arreglo.
    // Compara el primero con el segundo, luego el segundo con el tercero y así sucesivamente.
    // Devuelvo "1" si cambio de lugar o "-1" si quiero hacer un cambio inverso
    // Ordernaremos por nombre de forma ascendente.
    switch (argumentoOrdenarPor) {
      case 'nombre':
        return (value = value.sort((a, b) => (a.nombre > b.nombre ? 1 : -1)));
      case 'vuela':
        return (value = value.sort((a, b) => (a.vuela > b.vuela ? 1 : -1))); // boolean se ordenan primero false y luego true
      case 'color':
        return (value = value.sort((a, b) => (a.color > b.color ? 1 : -1)));

      default:
        return value;
    }
  }
}
