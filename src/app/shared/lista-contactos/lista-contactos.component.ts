import { Component, OnInit } from '@angular/core';
import {Contacto} from "../interfaces/contacto";
import {ListaContactosService} from "../services/lista-contactos.service";

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  public listaContactos: Contacto[]=[];

  constructor(private listaContactosService: ListaContactosService) { }

  ngOnInit(): void {
    this.recibirContactos()
  }

  private recibirContactos(): void{
  this.listaContactosService.recibirContactos().subscribe(
  (data)=> {this.listaContactos= data},
  (error)=>{console.log('error')},
  ()=>{console.log('hecho')}
)

  }
 public mostrarCard(nombre:string):void{
    alert(nombre);
 }

 public eliminarCard(id: number): void{
   this.listaContactos= this.listaContactos.filter((contacto)=> contacto.id!==id);
 }

}
