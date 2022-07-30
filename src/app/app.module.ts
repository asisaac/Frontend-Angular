import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxStarRatingModule } from 'ngx-star-rating';
import { ReactiveFormsModule } from '@angular/forms';
import { SatisfaccionComponent } from './satisfaccion/satisfaccion.component'
import { interceptorProvider } from './interceptor/enc-interceptor.service';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    SatisfaccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
    RouterModule,
    CommonModule,
    NgxChartsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
