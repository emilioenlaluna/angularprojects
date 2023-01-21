import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <products></products>`,
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
  })
  export class AppComponent {
    title: string = 'My Second Angular App';
  }
