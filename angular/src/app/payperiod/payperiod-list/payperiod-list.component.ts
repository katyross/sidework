import { Component, OnInit } from '@angular/core';
import {PayPeriod} from "../payperiod";
import {PayPeriodService} from "../payperiod.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payperiod-list',
  templateUrl: './payperiod-list.component.html',
  styleUrls: ['./payperiod-list.component.css']
})
export class PayPeriodListComponent implements OnInit {
  payPeriodList: Array<PayPeriod[]> =[];
  constructor(private payPeriodService: PayPeriodService,
              private router: Router) { }

  ngOnInit() {
    this.getPeriods();
  }

  getPeriods(){
    return this.payPeriodService.getPayPeriodList()
      .then(successResponse => {
        this.payPeriodList = successResponse;
      })
      .catch(errorResponse =>{
        //error here
      })
  }

  add(){
    this.router.navigate(['/pay-period/create']);
  }

}
