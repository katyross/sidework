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
  restaurant: object;

  constructor(private route: ActivatedRoute, private router: Router,
              private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurant = new Restaurant();
    this.id = this.route.snapshot.params['id'];

    this.restaurantService.getRestaurant(this.id)
      .subscribe(data => {
        console.log(data)
        this.restaurant = data;
      });
  }

  updateRestaurant(){
    this.restaurantService.updateRestaurant(this.id, this.restaurant)
      .subscribe(data => console.log(data));
    //this.restaurant = new Restaurant();
    this.list();
  }

  onSubmit(){
    this.updateRestaurant();
  }

  list(){
    this.router.navigate(['/restaurants/info/'+ this.id]);
  }

}
