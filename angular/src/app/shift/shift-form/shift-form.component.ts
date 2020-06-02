import {Component, Input, OnInit} from '@angular/core';
import {ShiftService} from "../shift.service";
import {Shift} from "../shift";
import {ActivatedRoute, Router} from "@angular/router";
import {Restaurant} from "../../restaurant/restaurant";
import {RestaurantService} from "../../restaurant/restaurant.service";

@Component({
  selector: 'app-shift-form',
  templateUrl: './shift-form.component.html',
  styleUrls: ['./shift-form.component.css'],
})

export class ShiftFormComponent implements OnInit {
  shift: Shift;
  restaurantList: Restaurant[];

  constructor(private shiftService: ShiftService,
              private restaurantService: RestaurantService,
              private route: ActivatedRoute,
              private router: Router) {
    this.shift = new Shift();
    this.restaurantList = [];
  }

  // load workplaces
  ngOnInit(){
  this.getRestaurants();
  }
  getRestaurants(): any{
    this.shiftService.getAllRestaurants().then(successResponse => {this.restaurantList = successResponse;
    })
      .catch(errorResponse => {

      });
  }

// save new object on submit
  onSubmit(shift: any) {
    // find restaurantWorked
    this.shiftService.saveShift(shift)
      .then(successResponse =>{
      this.goToShiftList();
    })
      .catch(errorResponse => {

      });
  }

  //go to the list of shifts once shift is submitted
  goToShiftList(){
    this.router.navigate(['/shifts']);
  }

}
