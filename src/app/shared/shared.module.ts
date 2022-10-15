import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    ListaContactosComponent,
    ContactoComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    ListaContactosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    RouterLink,

  ]
})
export class SharedModule { }
