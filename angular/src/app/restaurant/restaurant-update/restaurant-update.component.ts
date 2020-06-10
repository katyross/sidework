import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../restaurant";
import {ActivatedRoute, Router} from "@angular/router";
import {RestaurantService} from "../restaurant.service";

@Component({
  selector: 'app-restaurant-update',
  templateUrl: './restaurant-update.component.html',
  styleUrls: ['./restaurant-update.component.css']
})
export class RestaurantUpdateComponent implements OnInit {
  id: number;
  restaurant:Restaurant = new Restaurant();

  constructor(private route: ActivatedRoute, private router: Router,
              private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant(){
    this.id = this.route.snapshot.params['id'];
    this.restaurantService.getRestaurant(this.id)
      .then(successResponse => {
        this.restaurant = successResponse;
      }).catch();
  }

  updateRestaurant(id:number, restaurant: Restaurant){
    this.restaurantService.updateRestaurant(this.id, this.restaurant)
      .then(successResponse =>{
        this.list();
      }).catch();

  }



  list(){
    this.router.navigate(['/restaurants/info/'+ this.id]);
  }

}
