import { RestaurantInfoComponent } from './restaurant/restaurant-info/restaurant-info.component';
import { CreateRestaurantComponent } from './restaurant/create-restaurant/create-restaurant.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
//import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'addWork', component: CreateRestaurantComponent },
  //{ path: 'update/:id', component: UpdateRestaurantComponent },
  { path: 'info/:id', component: RestaurantInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
