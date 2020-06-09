import { RestaurantInfoComponent } from './restaurant/restaurant-info/restaurant-info.component';
import { CreateRestaurantComponent } from './restaurant/create-restaurant/create-restaurant.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';

import {ShiftListComponent} from "./shift/shift-list/shift-list.component";
import {ShiftFormComponent} from "./shift/shift-form/shift-form.component";
import {RestaurantUpdateComponent} from "./restaurant/restaurant-update/restaurant-update.component";
import {ShiftUpdateComponent} from "./shift/shift-update/shift-update.component";
import {ShiftInfoComponent} from "./shift/shift-info/shift-info.component";
import {AppRoutes} from "./app-routes";

const routes: Routes = [
  //restaurants
  //{ path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: AppRoutes.restaurants, component: RestaurantListComponent },
  { path: 'addWork', component: CreateRestaurantComponent },
  { path: AppRoutes.restaurants + AppRoutes.info, component: RestaurantInfoComponent },
  { path: AppRoutes.restaurants + AppRoutes.update, component: RestaurantUpdateComponent},
  //shifts
  { path: AppRoutes.shifts, component: ShiftListComponent},
  { path: AppRoutes.shifts + '/addShift', component: ShiftFormComponent},
  { path: AppRoutes.shifts + AppRoutes.info, component: ShiftInfoComponent},
  { path: AppRoutes.shifts + AppRoutes.update, component: ShiftUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
