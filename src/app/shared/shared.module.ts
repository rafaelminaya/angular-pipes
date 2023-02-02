import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// PrimeNgModule : Contiene los módulos de Prime ng para el diseño
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [MenuComponent],
})
export class SharedModule {}
