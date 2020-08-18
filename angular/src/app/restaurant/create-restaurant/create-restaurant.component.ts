import {Component} from '@angular/core';
import { Restaurant } from "../restaurant";
import { RestaurantService } from "../restaurant.service";
import {ActivatedRoute} from '@angular/router';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent{
  restaurant: Restaurant;
  constructor(private route: ActivatedRoute,
              private restaurantService: RestaurantService,
              public activeModal: NgbActiveModal) {
    this.restaurant = new Restaurant();
  }


  onSubmit(restaurant: Restaurant){
     this.restaurant = restaurant;
      this.restaurantService
        .save(this.restaurant)
        .then(successResponse => {
          this.refresh();
        })
        .catch(errorResponse => {

        });
    }

    refresh():void{
      window.location.reload();
    }

}
