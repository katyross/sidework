import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantComponent,
    RestaurantInfoComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
