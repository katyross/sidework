import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
//import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'add', component: CreateRestaurantComponent },
  //{ path: 'update/:id', component: UpdateRestaurantComponent },
  { path: 'info/:id', component: RestaurantInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
