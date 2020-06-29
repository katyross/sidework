import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../restaurant/restaurant";
import {Shift} from "../shift";
import {ShiftService} from "../shift.service";
import {Router} from "@angular/router";
import {NgbActiveModal, NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-shift-create',
  templateUrl: './shift-create.component.html',
  styleUrls: ['./shift-create.component.css']
})
export class ShiftCreateComponent implements OnInit {

  shift: Shift;
  restaurantList: Restaurant[];
  inDate: NgbDateStruct;
  outDate: NgbDateStruct;

  //inDateAndTime: string;
  time: { hour: 12, minute: 30 };
  outTime: {hour: 12, minute:30};
  meridian = true;
  aMeridian = true;

  constructor(private shiftService: ShiftService,
              private router: Router,
              private activeModal: NgbActiveModal,
              private calendar: NgbCalendar) {

    this.inDate = calendar.getToday();
    this.outDate = calendar.getToday();
    this.shift = new Shift();
    this.restaurantList = [];

  }

  ngOnInit() {
    this.getRestaurants();
  }

    onSubmit(shift: any) {
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
  // dateTimeToString(Date:string, Time:string){
  //   Date = Date.split("-").reverse().join("/");
  //   this.inDateAndTime = Date.concat(" ").concat(Time);
  //   console.log(this.inDateAndTime);
  // }

  refresh(): void {
    window.location.reload();
  }

}
