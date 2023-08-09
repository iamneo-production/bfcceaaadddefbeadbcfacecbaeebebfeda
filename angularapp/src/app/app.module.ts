import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import {FoodSearchPipe} from './food-search.pipe';
import{FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }