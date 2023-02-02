import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ComunesComponent } from './ventas/pages/comunes/comunes.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes: Route[] = [
  {
    path: '', // http://localhost:4200
    component: ComunesComponent,
    pathMatch: 'full',
  },

  {
    path: 'numeros', // http://localhost:4200/numeros
    component: NumerosComponent,
  },
  {
    path: 'no-comunes', // http://localhost:4200/no-comunes
    component: NoComunesComponent,
  },
  {
    path: 'ordenar', // http://localhost:4200/ordenar
    component: OrdenarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
