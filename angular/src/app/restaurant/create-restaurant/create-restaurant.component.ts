import { Component } from '@angular/core';
import { Restaurant } from "../restaurant";
import { RestaurantService } from "../restaurant.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent {
  restaurant: Restaurant;

  constructor(private route: ActivatedRoute,
              private restaurantService: RestaurantService,
              private router: Router) {
    this.restaurant = new Restaurant();
  }

  onSubmit(){
      this.restaurantService.save(this.restaurant).subscribe(data => this.gotoList());
    }

  gotoList(){
    this.router.navigate(['/restaurants']);
  }

}
