import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../restaurant/restaurant";
import {Shift} from "../shift";
import {ShiftService} from "../shift.service";
import {Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-shift-create',
  templateUrl: './shift-create.component.html',
  styleUrls: ['./shift-create.component.css']
})
export class ShiftCreateComponent implements OnInit {
  shift: Shift;
  restaurantList: Restaurant[];

  constructor(private shiftService: ShiftService,
              private router: Router,
              private activeModal: NgbActiveModal) {

    this.shift = new Shift();
    this.restaurantList = [];

  }

  ngOnInit() {
    this.getRestaurants();
  }
  // save new object on submit
    onSubmit(shift: any) {
      // find restaurantWorked
      this.shiftService.saveShift(shift)
        .then(successResponse =>{
          this.refresh();
        })
        .catch(errorResponse => {
        });
      }

  getRestaurants(): any{
    this.shiftService.getAllRestaurants().then(successResponse => {
      this.restaurantList = successResponse;
    })
      .catch(errorResponse => {

      });
  }
  refresh(): void {
    window.location.reload();
  }

}
