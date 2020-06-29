import { RestaurantInfoComponent } from './restaurant/restaurant-info/restaurant-info.component';
import { CreateRestaurantComponent } from './restaurant/create-restaurant/create-restaurant.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';

import {ShiftListComponent} from "./shift/shift-list/shift-list.component";
import {RestaurantUpdateComponent} from "./restaurant/restaurant-update/restaurant-update.component";
import {AppRoutes} from "./app-routes";
import {IncomeListComponent} from "./income/income-list/income-list.component";
import {ShiftUpdateComponent} from "./shift/shift-update/shift-update.component";


const routes: Routes = [
  //restaurants
  //{ path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: AppRoutes.restaurants, component: RestaurantListComponent },
  { path: 'addWork', component: CreateRestaurantComponent },
  { path: AppRoutes.restaurants + AppRoutes.info, component: RestaurantInfoComponent },
  { path: AppRoutes.restaurants + AppRoutes.update, component: RestaurantUpdateComponent},
  //shifts
  { path: AppRoutes.shifts, component: ShiftListComponent},
   { path: AppRoutes.shifts + AppRoutes.update, component: ShiftUpdateComponent},
// income
  {path: AppRoutes.income, component: IncomeListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
