export class Satisfaccion {
  nombre:string;
  email:string;
  calificacion:number;
  obs:string;
  telefono:string;
  horario:string;

  constructor(nombre:string, email:string, calificacion:number, obs:string, telefono:string, horario:string){
    this.nombre = nombre;
    this.email = email;
    this.calificacion = calificacion;
    this.obs = obs;
    this.telefono = telefono;
    this.horario = horario;
  }
}
