import { RestaurantInfoComponent } from './restaurant/restaurant-info/restaurant-info.component';
import { CreateRestaurantComponent } from './restaurant/create-restaurant/create-restaurant.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';

import {ShiftListComponent} from "./shift/shift-list/shift-list.component";
import {ShiftFormComponent} from "./shift/shift-form/shift-form.component";
import {RestaurantUpdateComponent} from "./restaurant/restaurant-update/restaurant-update.component";

const routes: Routes = [
  //restaurants
  //{ path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'addWork', component: CreateRestaurantComponent },
  { path: 'restaurants/info/:id', component: RestaurantInfoComponent },
  { path: 'restaurants/update/:id', component: RestaurantUpdateComponent},
  //shifts
  { path: 'shifts', component: ShiftListComponent},
  { path: 'shifts/addShift', component: ShiftFormComponent},
 // { path: 'shifts/info/:id', component: ShiftInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
