import { Component, OnInit } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import { Counts } from '../models/counts';
import { Satisfaccion } from '../models/satisfaccion';
import { SatisfaccionService } from '../services/satisfaccion.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-satifaccion',
  templateUrl: './satisfaccion.component.html',
  styleUrls: ['./satisfaccion.component.css']
})

export class SatisfaccionComponent implements OnInit {

  satisfaccionList:Satisfaccion[];
  countsList:Counts[];

  generalData:[Satisfaccion[], Counts[]];

  roles:string[];
  isHab=false;

  //datos del grafico
  //single: Counts[];
  view: [number, number] = [700, 400];

  // opciones del grafico
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#00FF00', '#008080'], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage',
  };

  //valueFormatting
  animations: boolean = true;
  tooltipDisabled:boolean = false;
  labelTotal: string = 'Total';

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  
  constructor(
    private satisfaccionService:SatisfaccionService,
    private tokenService:TokenService    
  ) { }

  ngOnInit(): void {
    //this.cargarEncuesta();
    //this.cargarEstadistica();
    this.cargarDatosGenerales();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN' || rol === 'ROLE_USER' || rol === null) {
        this.isHab = true;
      }
    });
  }

  cargarEncuesta():void{
    this.satisfaccionService.listar().subscribe(data => {
      this.satisfaccionList = data;
      console.log(this.satisfaccionList);
    }, err => {
      console.log(err);
    });
  }

  cargarEstadistica():void{
    this.satisfaccionService.estadistica().subscribe(data=>{
      this.countsList = data;
      console.log(this.countsList);
    }, err =>{
      console.log(err);
    });
  }

  cargarDatosGenerales():void{
    this.satisfaccionService.datosGenerales().subscribe(data=>{
      this.generalData = data;
      this.satisfaccionList = data[0];
      this.countsList = data[1];
      console.log(this.satisfaccionList);
      console.log(this.countsList);
    }, err =>{
      console.log(err);
    });
  }
}
