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
import { IncomeListComponent } from './income/income-list/income-list.component';
import {IncomeService} from "./income/income.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ShiftCreateComponent } from './shift/shift-create/shift-create.component';
import { ShiftInfoComponent } from './shift/shift-info/shift-info.component';
import {CustomFormsModule} from "ng2-validation";






@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantComponent,
    RestaurantInfoComponent,
    RestaurantListComponent,
    ShiftListComponent,
    IncomeListComponent,
    ShiftCreateComponent,
    ShiftInfoComponent,
  ],
    entryComponents: [ShiftCreateComponent,
                      ShiftInfoComponent,
                      RestaurantInfoComponent,
                      CreateRestaurantComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        CustomFormsModule,
    ],

  providers: [
    RestaurantService,
    ShiftService,
    IncomeService,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
