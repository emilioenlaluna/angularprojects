import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <img src="{{imageUrl}}" />
  <button
class="btn btn-primary"
[class.active]="isActive">Submit</button>
  <img [src]="imageUrl" />
  <button
class="btn btn-primary"
[style.backgroundColor]="isActive ? 'blue':'gray'">Submit</button>
<img bind-src="imageUrl" />
  <products></products>
  <br>
  
  <button (click)="onClick($event)">Submit</button>

  <input [(ngModel)]="name" #ctrl="ngModel" required>

<p>Value: {{ name }}</p>
<p>Valid: {{ ctrl.valid }}</p>

<button (click)="setValue()">Set value</button>

<rating></rating>
<br>
<rating [rating-value]="4"></rating> , 
  `
  ,
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title: string = 'My Second Angular App';
  imageUrl = "https://picsum.photos/400/200";
  isActive = false;
  name: string = '';

  setValue() {
    this.name = 'Nancy';
  }
  onClick($event: any){
    console.log("Clicked",$event)
    alert("nfhdiuf")
    }
}
