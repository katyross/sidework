import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Shift} from "../shift";
import {ShiftService} from "../shift.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.css']
})
export class ShiftListComponent implements OnInit {
  shiftList: Shift[];
  aShift: Shift;
  constructor(private shiftService: ShiftService,
              private router: Router) {
    this.shiftList = [];
  }

  ngOnInit() {
    this.getAllShifts();
  }

  getAllShifts(): any {
    return this.shiftService.getShiftList().then(successResponse => {
      this.shiftList = successResponse;
    })
      .catch(errorResponse => {
        //error here
      })
  }

  getShift(id: number) {
    this.router.navigate(['/shifts/info', id])
      .then(successResponse => {
        this.aShift = new Shift()
      });
  }
}



