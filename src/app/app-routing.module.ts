import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './web/no-page-found/no-page-found.component';
import { WebRoutingRoutingModule } from './web/web-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { InformeRoutingModule } from './informe/informe-routing.module';
import { AlmacenesRoutingModule } from './almacenes/almacenes-routing.module';


const routes: Routes = [
{path: '', redirectTo:'/dashboard', pathMatch: 'full'},
// {path:'dashboard' ,loadChildren: () => import('./web/web-routing.module').then(m =>m.WebRoutingRoutingModule)},
// {path:'dashboard' ,loadChildren: () => WebRoutingRoutingModule},
{path: '**', component: NoPageFoundComponent},
]
@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    WebRoutingRoutingModule,
    AuthRoutingModule,
    InformeRoutingModule,
    AlmacenesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
