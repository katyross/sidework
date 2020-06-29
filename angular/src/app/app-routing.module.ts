
import { CreateRestaurantComponent } from './restaurant/create-restaurant/create-restaurant.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';

import {ShiftListComponent} from "./shift/shift-list/shift-list.component";
import {AppRoutes} from "./app-routes";
import {IncomeListComponent} from "./income/income-list/income-list.component";



const routes: Routes = [
  //restaurants
  //{ path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: AppRoutes.restaurants, component: RestaurantListComponent },
  { path: 'addWork', component: CreateRestaurantComponent },
  //shifts
  { path: AppRoutes.shifts, component: ShiftListComponent},
// income
  {path: AppRoutes.income, component: IncomeListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
