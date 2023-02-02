import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Módulo para cuando importemos un componente que tenga al gún tipo de animación, como el módulo "FieldsetModule" usado dentro del módulo "SharedModule" para poder usar etiqutas como "<p-fieldset>"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
// Módulo de componentes compartidos, el cual importa el módulo personalizado de PrimeNg
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Seleccionamos el "locale" que personaliza formatos de: Fechas, números, monedas, etc del idioma y país elegidos
// localEs : Es un nombre dado por nosotros, que tomará la exportación por defecto del paquete '@angular/common/locales/es-PE'
// es-PE : Indicamos el idioma y el país
import localEs from '@angular/common/locales/es-PE';
import localFr from '@angular/common/locales/fr';

// registerLocaleData : Funcion importada que registrar un "locale"
import { registerLocaleData } from '@angular/common';

// Invocamos la función importada enviándole por argumento el "locale" elegido
registerLocaleData(localEs);
// Registro al francés como segundo idioma, para permitir usar el "fr" dentro de los pipes en el template "comunes.component.html"
registerLocaleData(localFr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule,
  ],
  // Cambiamos el local de la aplicación de forma global
  providers: [
    {
      provide: LOCALE_ID, // LOCAL_ID : Propio de angular para asignar un local de forma global
      useValue: 'es-PE', // indicamos el "locale" seleccionado previamente en el importa "localEs"
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
