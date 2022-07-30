import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { EncGuardService as guard} from './guards/enc-guard.service';
import { IndexComponent } from './index/index.component';
import { SatisfaccionComponent } from './satisfaccion/satisfaccion.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'listado', component:SatisfaccionComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'registrar', component:IndexComponent, canActivate: [guard]},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
