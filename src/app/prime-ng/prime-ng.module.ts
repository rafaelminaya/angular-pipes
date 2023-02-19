// El "CommonModule" que viene por defecto en todo módulo será removido hasta que se le necesite.
import { NgModule } from '@angular/core';
// Cuando tengamos varios módulos del mismo paquete se recomienda importarlos alfabéticamente.
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
// Solo usaremos la propiedad "exports", ya que utilizaremos este módulo exclusivamente
// para exportar los módulos de PrimeNg
@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimeNgModule {}
