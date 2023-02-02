import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // ATRIBUTOS
  // i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  // mapa para indicar cómo funcionará el pipe
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  // mapa para indicar cómo funcionará el pipe.
  // Se añaden diferentes registros para cada cantidad de registros.
  // other : Para cantidades diferentes a las ya mapeadas
  // # : Obtiene el valor asignado al "other"
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  // KeyValuePipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá',
  };

  // json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  // async pipe
  // interval(1000) : Es un Observable que emite valores numéricos cada 1000 mili segundos. Importado de 'rxjs'.
  miObservable = interval(5000); // 0, 1, 2, 3, 4, 5 ...

  // Creamos una promesa para usarla enel template
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa.');
    }, 3500);
  });

  // MÉTODOS
  cambiarCliente() {
    this.nombre = 'Carla';
    this.genero = 'femenino';
  }

  borrarCliente() {
    // elimina el último registro del arreglo y retonar lo eliminado
    this.clientes.pop();
  }
}
