import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ShiftService} from "../shift.service";
import {Shift} from "../shift";
import {Restaurant} from "../../restaurant/restaurant";

@Component({
  selector: 'app-shift-update',
  templateUrl: './shift-update.component.html',
  styleUrls: ['./shift-update.component.css'],
})
export class ShiftUpdateComponent implements OnInit {

  id:number;
  shift: Shift = new Shift();
  restaurantList: Restaurant[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private shiftService: ShiftService) { }

  ngOnInit() {
    this.getShift();
    this.getRestaurants();
  }

  getShift(){
    if (this.id) {
      this.shiftService
        .getShift(this.id)
        .then(response => {
          this.shift = response;
        }).catch();
    }
  }

  updateShift(id:number, shift: Shift){
    this.id = id;
    this.shift = shift;
    this.shiftService
      .updateShift(this.id, this.shift)
      .then( successResponse => {

        }
      ).catch();
  }

  getRestaurants(): any{
    this.shiftService.getAllRestaurants().then(successResponse => {
      this.restaurantList = successResponse;
    })
      .catch(errorResponse => {
      });
  }

}
