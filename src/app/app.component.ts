import { Product } from './interfaces/products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myproject';
  productsList: Product[] = [
    {
      title: "Frutos secos",
      price: "350"
    },
    {
      title: "Galletas de avena",
      price: "400"
    },
    {
      title: "Cereales",
      price: "150"
    },
    {
      title: "Barra proteica",
      price: "250"
    }
  ]
  ocultar = false;

  ocultarTabla():void {
    this.ocultar = !this.ocultar
  }

}
