import { Pipe, PipeTransform } from '@angular/core';

// @Pipe : Decorador para indicar que la clase será un "pipe",
// name : Atribvuto para indicar el nombre con el que usaremos el pipe
// PipeTransform : interfaz que toda clase "pipe" necesita implementar.
// transform : Método a implementar de la interfaz PipeTransform".
// Es la función que se va a ejecutar cuando alguien utilice el "pipe".
// Basta con poner el nombre "transform(){}" e implementar como se necesite.
@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  // Método implementado de "PipeTransform"
  transform(valor: string, enMayusculas: boolean = true): string {
    // retornamos mayusculas o minuculas dependiendo del argumento del template
    /*
    if (enMayusculas) {
      return valor.toUpperCase();
    } else {
      return valor.toLowerCase();
    }
    */

    return enMayusculas ? valor.toUpperCase() : valor.toLocaleLowerCase();
  }
}
