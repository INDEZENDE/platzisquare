import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cambio en .ts';
  lugares: any = [
    { plan: 'gratuito', cercania: 1, distancia: 10, active: true, nombre: 'Floreria' },
    { plan: 'pagado', cercania: 2, distancia: 20, active: true, nombre: 'Restaurante' },
    { plan: 'pagado', cercania: 3, distancia: 30, active: false, nombre: 'Veterinaria' },
    { plan: 'gratuito', cercania: 2, distancia: 20, active: false, nombre: 'Papeleria' },
    { plan: 'gratuito', cercania: 2, distancia: 20, active: true, nombre: 'Cafeteria' },
    { plan: 'pagado', cercania: 3, distancia: 30, active: false, nombre: 'Tienda de electrónica' },
  ];
  lat = 19.4131565;
  lng = -99.1931225;
  zoom = 17;


  constructor() {

  }
}


