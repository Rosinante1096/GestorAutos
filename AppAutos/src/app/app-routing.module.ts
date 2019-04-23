import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroComponent } from './componentes/carro/carro.component';

const routes: Routes = [
  {path:'carro', component:CarroComponent},
  {path:'', redirectTo:'/carro',pathMatch: 'full'},
  {path:'**', redirectTo:'',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
