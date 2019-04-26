import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroComponent } from './componentes/carro/carro.component';
import { CarroDetalleComponent } from './componentes/carro-detalle/carro-detalle.component';

const routes: Routes = [
  {path:'carro', component:CarroComponent},
  {path:'carro-detalle', component:CarroDetalleComponent},
  {path:'', redirectTo:'/carro',pathMatch: 'full'},
  {path:'**', redirectTo:'',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
