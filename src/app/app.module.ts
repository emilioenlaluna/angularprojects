import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
