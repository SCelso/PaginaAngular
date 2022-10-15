import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input()
  public contacto: any;


  @Output()
  private onDoEvent: EventEmitter<number>= new EventEmitter<number>();

  constructor() {


  }

  ngOnInit(): void {
  }

  public doEvent():void{
    this.onDoEvent.emit(this.contacto.id);
  }

}
