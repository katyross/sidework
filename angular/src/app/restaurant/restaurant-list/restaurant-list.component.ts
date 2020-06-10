import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs";
import {RestaurantService} from "../restaurant.service";
import {Router} from '@angular/router';
import {Restaurant} from "../restaurant";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
    restaurant: Observable<Restaurant[]>;

  constructor(private restaurantService: RestaurantService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

reloadData(){
    this.restaurant = this.restaurantService.getRestaurantList();
}


    restaurantDetails(id:number){
    this.router.navigate(['/restaurants/info', id]);
  }
}
