import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateRestaurantComponent } from './restaurant/create-restaurant/create-restaurant.component';
import { RestaurantService} from "./restaurant/restaurant.service";
import { RestaurantInfoComponent } from './restaurant/restaurant-info/restaurant-info.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import {FormsModule} from "@angular/forms";
import {ShiftService} from "./shift/shift.service";
import { ShiftListComponent } from './shift/shift-list/shift-list.component';
import { ShiftFormComponent } from './shift/shift-form/shift-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantComponent,
    RestaurantInfoComponent,
    RestaurantListComponent,
    ShiftListComponent,
    ShiftFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RestaurantService,
    ShiftService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
