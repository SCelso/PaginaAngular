import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListaContactosService {

  constructor(private HttpClient: HttpClient) { }

  public recibirContactos(): Observable<any>{
   return this.HttpClient.get<any>('/assets/json/contactos.json')
  }
}
