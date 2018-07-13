import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cambio en .ts';
  lugares:any = [
    {cercania: 1, distancia:10, active: true, nombre: 'Floreria'},
    {cercania: 2, distancia:20, active: true, nombre: 'Restaurante'},
    {cercania: 3, distancia:30, active: false, nombre: 'Veterinaria'},
  ];

  // a=3;
  // b=5;
  // listo=false;

  constructor(){
  //   setTimeout(()=>{this.listo=true},3000)
  // }
  // hacerAlgo(){
  //   alert("haciendo algo")
  // }
  }
}
