export class Contacto {
  private _id: number;
  private _nombre:string;
  private _telefono:number;


  constructor(id: number, nombre: string, telefono: number) {
    this._id = id;
    this._nombre = nombre;
    this._telefono = telefono;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get telefono(): number {
    return this._telefono;
  }

  set telefono(value: number) {
    this._telefono = value;
  }
}
