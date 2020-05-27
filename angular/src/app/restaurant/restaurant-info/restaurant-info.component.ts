import { Restaurant } from '../restaurant';
import {Component, OnInit, Input} from '@angular/core';
import { RestaurantService} from '../restaurant.service';
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  id: number;
  restaurant: object;

  constructor(private route: ActivatedRoute, private router: Router,
              private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurant = new Restaurant();
    this.id = this.route.snapshot.params['id'];

    this.restaurantService.getRestaurant(this.id)
      .subscribe(data =>{
        console.log(data)
        this.restaurant = data;
      });
   }

  list(){
    this.router.navigate(['/restaurants']);
  }
}