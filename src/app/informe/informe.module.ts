import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario/inventario.component';
import { VentasComponent } from './ventas/ventas.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InventarioComponent,
    VentasComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    InventarioComponent,
    VentasComponent,
    HomeComponent
  ]
})
export class InformeModule { }
