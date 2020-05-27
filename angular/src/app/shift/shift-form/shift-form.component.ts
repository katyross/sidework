import { Component, OnInit } from '@angular/core';
import {ShiftService} from "../shift.service";
import {Shift} from "../shift";
import {ActivatedRoute, Router} from "@angular/router";
import {Restaurant} from "../../restaurant/restaurant";
import {Observable} from "rxjs";
import {RestaurantService} from "../../restaurant/restaurant.service";

@Component({
  selector: 'app-shift-form',
  templateUrl: './shift-form.component.html',
  styleUrls: ['./shift-form.component.css']
})
export class ShiftFormComponent implements OnInit{
  shift: Shift;
  restaurant: Observable<Restaurant[]>;

  constructor(private shiftService: ShiftService,
              private restaurantService: RestaurantService,
              private route: ActivatedRoute,
              private router: Router) {
    this.shift = new Shift();
  }

  ngOnInit(){
    this.reloadData();
  }
  reloadData(){
    this.restaurant = this.restaurantService.getRestaurantList();
  }

// save new object on submit
  onSubmit() {
    this.shiftService.saveShift(this.shift)
      .subscribe(result => this.goToShiftList());
  }
  //go to the list of shifts once shift is submitted
  ;
  goToShiftList(){
    this.router.navigate(['/shifts']);
  }
}
