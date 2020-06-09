import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ShiftService} from "../shift.service";
import {Shift} from "../shift";
import {Restaurant} from "../../restaurant/restaurant";
import {RestaurantService} from "../../restaurant/restaurant.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shift-update',
  templateUrl: './shift-update.component.html',
  styleUrls: ['./shift-update.component.css']
})
export class ShiftUpdateComponent implements OnInit {
  id:number;
  shift: Shift;
  restaurantList: Restaurant[];

  constructor(private route: ActivatedRoute, private router: Router,
              private shiftService: ShiftService,) {
  }

  ngOnInit() {
    this.shift = new Shift();
    this.id = this.route.snapshot.params["id"];
    this.getRestaurants();
    this.shiftService.getShift(this.id)
      .then(successResponse => {
        this.shift = successResponse;
      }).catch();
  }


  updateShift(id: number, shift: Shift){
    this.shiftService.updateShift(this.id, this.shift)
      .then(successResponse => {
        this.list();
      }).catch();
  }

  list(){
    this.router.navigate(['/shifts/info/'+this.id]);
  }

  onSubmit(){
    this.updateShift(this.id, this.shift);
  }

  getRestaurants(): any{
    this.shiftService.getAllRestaurants().then(successResponse => {
      this.restaurantList = successResponse;
    })
      .catch(errorResponse => {
      });
  }
}
