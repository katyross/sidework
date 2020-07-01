import { Component, OnInit } from '@angular/core';
import {Shift} from "../shift";
import {Restaurant} from "../../restaurant/restaurant";
import {ActivatedRoute, Router} from "@angular/router";
import {ShiftService} from "../shift.service";
import {
  NgbActiveModal,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbModal,
  NgbTimeStruct
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-shift-info',
  templateUrl: './shift-info.component.html',
  styleUrls: ['./shift-info.component.css']
})
export class ShiftInfoComponent implements OnInit {

  id:number;
  shift: Shift = new Shift();
  restaurantList: Restaurant[];

  inDateModel: NgbDateStruct;
  outDateModel: NgbDateStruct;
  payDayModel: NgbDateStruct;
  inTimeModel: NgbTimeStruct;
  outTimeModel: NgbTimeStruct;
  // after formatting date / time object to string
  inDateAndTime: string;
  outDateAndTime: string;
  payDate: string;

  timeString: string;
  dateString: string;
  amPm: string;
  //toggle AM/PM in time picker
  meridian = true;
  aMeridian = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private activeModal: NgbActiveModal,
              private parserFormatter: NgbDateParserFormatter,
              private modalService: NgbModal,
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

  updateShift(shift: Shift){
    shift.payDay = this.payDate;
    shift.inTime = this.inDateAndTime;
    shift.outTime = this.outDateAndTime;

    this.shift = shift;

    this.shiftService
      .updateShift(this.id, this.shift)
      .then( successResponse => {

        }
      ).catch(errorResponse =>{

    });
  }

  openUpdateModal(content){
    this.modalService.open(content);
    this.stringToDate(this.shift.inTime,this.shift.outTime,this.shift.payDay)
  }

 // converts string to date objects to view in datepicker
  stringToDate(aInDate: string, aOutDate: string, aPayDate: string){

    this.inDateModel = {day: Number(aInDate.substring(0,2)), month: Number(aInDate.substring(3,5)), year: Number(aInDate.substring(6,10))};
    this.inTimeModel = {hour: Number(aInDate.substring(11,13)), minute: Number(aInDate.substring(14,16)), second: null};

    this.outDateModel = {day: Number(aOutDate.substring(0,2)), month: Number(aOutDate.substring(3,5)), year: Number(aOutDate.substring(6,10))};
    this.outTimeModel = {hour: Number(aOutDate.substring(11,13)), minute: Number(aOutDate.substring(14,16)), second: null};

    this.payDayModel = {day: Number(aPayDate.substring(0,2)), month: Number(aPayDate.substring(3,5)), year: Number(aPayDate.substring(6,10))};
  }

  // turn date obj to string
  dateToString(aDate: NgbDateStruct): string {
    // format date
    if (aDate == this.payDayModel){
      this.payDate = this.parserFormatter.format(aDate);
      this.payDate = this.payDate.split("-").reverse().join("/");
    } else {
      this.dateString = this.parserFormatter.format(aDate);
      this.dateString = this.dateString.split("-").reverse().join("/");
    }
    return this.dateString;
  }
  // turn time obj to string
  formatTime(aTime:NgbTimeStruct): string{
    // format time
    if (aTime.hour >= 12) {
      if (aTime.hour > 12) {
        aTime.hour = aTime.hour - 12;
      }
      if (aTime.hour < 10) {
        this.timeString = "0".concat(aTime.hour.toString());
      } else {
        this.timeString = aTime.hour.toString();
      }
      this.amPm = " PM";
      // if 12 am
    } else if (aTime.hour == 0) {
      aTime.hour = 12;
      this.timeString = aTime.hour.toString();
      this.amPm = " AM";
    } else if (aTime.hour < 10){
      this.timeString = "0".concat(aTime.hour.toString());
      this.amPm = " AM";
    } else {
      this.timeString = aTime.hour.toString();
      this.amPm = " AM";
    }

    if (aTime.minute < 10) {
      this.timeString = this.timeString.concat(":0").concat(aTime.minute.toString().concat(this.amPm));
    } else {
      this.timeString = this.timeString.concat(":").concat(aTime.minute.toString().concat(this.amPm));
    }

    return this.timeString;
  }

  refresh(): void {
    window.location.reload();
  }

  getRestaurants(): any{
    this.shiftService.getAllRestaurants()
      .then(successResponse => {
      this.restaurantList = successResponse;
    })
      .catch(errorResponse => {
      });
  }

  deleteShift(id: number){
    this.shiftService.deleteShift(id)
      .then(successResponse => {
        this.refresh();
      })
      .catch();
  }

  // combines formatted date and time objects to valid string to send to server
  dateAndTime(aTime:NgbTimeStruct, aDate:NgbDateStruct){
    if (aTime == this.inTimeModel && aDate == this.inDateModel) {
      this.inDateAndTime = this.dateToString(aDate).concat(" ").concat(this.formatTime(aTime));
    } else if (aTime == this.outTimeModel && aDate == this.outDateModel) {
      this.outDateAndTime = this.dateToString(aDate).concat(" ").concat(this.formatTime(aTime));
    }
  }

}
