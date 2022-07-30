import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Counts } from '../models/counts';
import { Satisfaccion } from '../models/satisfaccion';

@Injectable({
  providedIn: 'root'
})

export class SatisfaccionService {

  authURL = 'http://localhost:8080/api/v1/';

  constructor(private httpClient: HttpClient) { }

  public registro(satisfaccion:Satisfaccion):Observable<any> {    
    return this.httpClient.post<any>(this.authURL + 'registrar', satisfaccion);
  }

  public listar():Observable<Satisfaccion[]> {
    return this.httpClient.get<Satisfaccion[]>(this.authURL + 'listar');
  }

  public estadistica():Observable<any>{
    return this.httpClient.get<any>(this.authURL + 'estadistica')
  }

  public datosGenerales():Observable<[Satisfaccion[], Counts[]]>{
    return this.httpClient.get<[Satisfaccion[], Counts[]]>(this.authURL + 'listado')
  }
}
