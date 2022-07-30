import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail =  false;
  loginUsuario:LoginUsuario;
  nombreUsuario:string;
  password:string;
  roles:string[] = [];
  errMsj:string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data=>{
      this.isLogged = true;
      this.isLoginFail = false;
      
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      
      Swal.fire({
        title: 'OK',
        text: 'Bienvenido '+ data.nombreUsuario,
        icon: 'success',
        showCancelButton:false,
        showConfirmButton:false,
        timer: 1500,
        width: 400,
        padding: '0em'
      });
      this.router.navigate(['/']);
    }, err =>{
      this.isLogged = false;
      this.isLoginFail = true;

      Swal.fire({
        title: 'Error...!!!!',
        text: 'Usario No Logeado',
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