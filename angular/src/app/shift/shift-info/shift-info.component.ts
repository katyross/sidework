import { Component, OnInit } from '@angular/core';
import {Shift} from "../shift";
import {ShiftService} from "../shift.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Restaurant} from "../../restaurant/restaurant";

@Component({
  selector: 'app-shift-info',
  templateUrl: './shift-info.component.html',
  styleUrls: ['./shift-info.component.css']
})

export class ShiftInfoComponent implements OnInit {
  shift: Shift;
  id: number;
  restaurants: Array<Restaurant> = [];

  constructor(private shiftService: ShiftService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.shift = new Shift();
    this.id = this.route.snapshot.params["id"];
    this.shiftService.getShift(this.id)
      .then(successResponse =>{
        this.shift = successResponse;
      })
      .catch();
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
