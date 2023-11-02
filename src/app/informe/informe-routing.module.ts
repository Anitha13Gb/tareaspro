import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {path: 'informe', component:HomeComponent ,
  children: [
  // {path: '', component: DashboardComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'ventas' , component: VentasComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformeRoutingModule { }
