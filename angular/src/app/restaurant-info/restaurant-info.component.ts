import { Restaurant } from '../restaurant';
import {Component, OnInit, Input} from '@angular/core';
import { RestaurantService} from '../restaurant.service';
import { RestaurantListComponent} from "../restaurant-list/restaurant-list.component";
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  id: number;
  restaurant: Restaurant;

  constructor(private route: ActivatedRoute, private router: Router,
              private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurant = new Restaurant();
    this.id = this.route.snapshot.params['id'];

    this.restaurantService.getRestaurant(this.id)
      .subscribe(data =>{
        console.log(data)
        this.restaurant = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['restaurant']);
  }
}
