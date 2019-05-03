import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CarroComponent } from './componentes/carro/carro.component';
import { RouterModule } from '@angular/router';
import { CarroDetalleComponent } from './componentes/carro-detalle/carro-detalle.component';
import { CarroService } from './servicios/carro.service';
import { MotoComponent } from './componentes/moto/moto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarroComponent,
    CarroDetalleComponent,
    MotoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CarroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
