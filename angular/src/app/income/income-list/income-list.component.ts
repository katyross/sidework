import { Component, OnInit } from '@angular/core';
import {IncomeService} from "../income.service";
import {Router} from "@angular/router";
import {NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ShiftService} from "../../shift/shift.service";
import {Restaurant} from "../../restaurant/restaurant";
import {RestaurantService} from "../../restaurant/restaurant.service";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})

export class IncomeListComponent implements OnInit {

  payDayList: String[];
  restaurantList: Array<Restaurant[]> = [];
  incomeList :  Map<string, number> = new Map<string,number>();
  searchTerm: string;
  searchType: string;
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;


  constructor(private incomeService : IncomeService,
              private restaurantService : RestaurantService,
              private shiftService : ShiftService,
              private router: Router,
              private calendar: NgbCalendar,
              public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 7);
    this.searchTerm="";
    this.searchType="";
    }


  ngOnInit() {
    this.getPayDayList();
    this.getRestaurants();
  }

  getPayDayList(){
    return this.incomeService.getPayDayList()
      .then(successResponse =>{
        this.payDayList = successResponse;
      }).catch( errorResponse =>{
        //errors
      })
  }

  getRestaurants(): any{
    this.shiftService.getAllRestaurants().then(successResponse => {
      this.restaurantList = successResponse;
    })
      .catch(errorResponse => {

      });
  }

  getIncomeByParams(searchType: string, searchTerm: string){
    this.searchTerm = searchTerm;
      this.searchType = searchType;
    return this.incomeService.getIncomeByParams(searchType,searchTerm)
      .then(successResponse => {
        this.incomeList = successResponse;
      })
      .catch(errorResponse => {
        //error HERE
      })
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }
 dateToString(dpFromDate:string,dpToDate:string){
    dpFromDate = dpFromDate.split("-").reverse().join("/");
    dpToDate = dpToDate.split("-").reverse().join("/");

   this.searchTerm = dpFromDate.concat("").concat(dpToDate);
   this.getIncomeByParams("findByPayPeriod",this.searchTerm);
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

}
