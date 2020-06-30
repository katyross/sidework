import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../restaurant/restaurant";
import {Shift} from "../shift";
import {ShiftService} from "../shift.service";
import {Router} from "@angular/router";
import {
  NgbActiveModal,
  NgbCalendar,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbTimeStruct
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-shift-create',
  templateUrl: './shift-create.component.html',
  styleUrls: ['./shift-create.component.css']
})
export class ShiftCreateComponent implements OnInit {

  shift: Shift;
  restaurantList: Restaurant[];
  inDateModel: NgbDateStruct;
  outDateModel: NgbDateStruct;
  // after formatting date object to string
  inTimeModel: NgbTimeStruct;
  outTimeModel: NgbTimeStruct;

  inDateAndTime: string;
  outDateAndTime: string;

  timeString: string;
  dateString: string;
  amPm: string;
  //toggle AM/PM in time picker
  meridian = true;
  aMeridian = true;

  constructor(private shiftService: ShiftService,
              private router: Router,
              private activeModal: NgbActiveModal,
              private parserFormatter: NgbDateParserFormatter,
              private calendar: NgbCalendar) {

    this.inDateModel = calendar.getToday();
    this.outDateModel = calendar.getToday();
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
    this.shiftService.getAllRestaurants()
      .then(successResponse => {
      this.restaurantList = successResponse;
    })
      .catch(errorResponse => {

      });
  }

  dateToString(aDate: NgbDateStruct): string {
    // format date
    this.dateString = this.parserFormatter.format(aDate);
    this.dateString = this.dateString.split("-").reverse().join("/");
    return this.dateString;
  }

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

  dateAndTime(aTime:NgbTimeStruct, aDate:NgbDateStruct){
    if (aTime == this.inTimeModel && aDate == this.inDateModel) {
      this.inDateAndTime = this.dateToString(aDate).concat(" ").concat(this.formatTime(aTime));
    } else if (aTime == this.outTimeModel && aDate == this.outDateModel) {
      this.outDateAndTime = this.dateToString(aDate).concat(" ").concat(this.formatTime(aTime));
    }
    }

  refresh(): void {
    window.location.reload();
  }

}
