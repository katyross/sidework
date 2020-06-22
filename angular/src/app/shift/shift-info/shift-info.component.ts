import { Component, OnInit } from '@angular/core';
import {Shift} from "../shift";
import {ShiftService} from "../shift.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Restaurant} from "../../restaurant/restaurant";
import {RestaurantService} from "../../restaurant/restaurant.service";

@Component({
  selector: 'app-shift-info',
  templateUrl: './shift-info.component.html',
  styleUrls: ['./shift-info.component.css']
})

export class ShiftInfoComponent implements OnInit {
  restaurant: Restaurant;
  shift: Shift = new Shift();
  id: number;

  constructor(private shiftService: ShiftService,
              private restaurantService: RestaurantService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getShiftbyId();
  }

  getShiftbyId(){
    this.id = this.route.snapshot.params["id"];
    this.shiftService.getShift(this.id)
      .then(successResponse =>{
        this.shift = successResponse;
      })
      .catch();
  }

update(){
  this.router.navigate(['/shifts/update/'+ this.id]);
}

deleteShift(id: number){
    this.shiftService.deleteShift(id)
      .then(successResponse => {
       this.list() ;
      })
      .catch();
  }

  list(){
    this.router.navigate(['/shifts']);
  }
}

