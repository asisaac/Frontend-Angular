import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Satisfaccion } from '../models/satisfaccion';
import { SatisfaccionService } from '../services/satisfaccion.service';
import { TokenService } from '../services/token.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  satisfaccion:Satisfaccion;
  nombre:string;
  email:string;
  calificacion:number;
  obs:string="";
  telefono:string="";
  horario:string="";

  isLogged=false;
  isActivated=true;


  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private satisfaccionService:SatisfaccionService,
    private router:Router,
    private tokenService: TokenService
    ) { 
      this.form = fb.group({rating:['', Validators.required]})    
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
  }

  onRegister():void {    
    this.satisfaccion = new Satisfaccion(this.nombre, this.email, this.calificacion, this.obs, this.telefono, this.horario);
    
    this.satisfaccionService.registro(this.satisfaccion).subscribe(data => {
      
      Swal.fire({
        title: 'OK',
        text: 'Encuesta Registrada',
        icon: 'success',
        showCancelButton:false,
        showConfirmButton:false,
        timer: 1500,
        width: 400,
        padding: '0em'
      });
      this.router.navigate(['/'])
    },err => {
      
      Swal.fire({
        title: 'Error...!!!',
        text: 'Encuesta No Registrada',
        icon: 'error',
        showCancelButton:false,
        showConfirmButton:false,
        timer: 1500,
        width: 400,
        padding: '0em'
      });
    })
  }

  onClicked():void{
    if(this.calificacion<=2){
      this.isActivated = true;
    }else{
      this.isActivated = false;
    }
  }
}
