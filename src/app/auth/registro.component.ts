import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario:NuevoUsuario;
  nombre:string;
  nombreUsuario:string;
  email:string;
  password:string;

  errMsj:string;
  isLogged=false;

  constructor(
    private tokenService:TokenService,
    private authService:AuthService,
    private router:Router

  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  onRegister():void{
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    
    this.authService.nuevo(this.nuevoUsuario).subscribe(data =>{
      
      Swal.fire({
        title: 'OK',
        text: 'Cuenta Creada',
        icon: 'success',
        showCancelButton:false,
        showConfirmButton:false,
        timer: 1500,
        width: 400,
        padding: '0em'
      });

      this.router.navigate(['/login']); 

    }, err => {
      
      Swal.fire({
        title: 'Error...!!!!',
        text: 'Error al Crear Cuenta',
        icon: 'error',
        showCancelButton:false,
        showConfirmButton:false,
        timer: 1500,
        width: 400,
        padding: '0em'
      });
    });
  }
}
