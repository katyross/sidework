import { Component } from '@angular/core';
import {PayPeriod} from "../payperiod";
import {PayPeriodService} from "../payperiod.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payperiod-add',
  templateUrl: './payperiod-add.component.html',
  styleUrls: ['./payperiod-add.component.css']
})
export class PayPeriodAddComponent {
  payPeriod: PayPeriod;

  constructor(private payPeriodService: PayPeriodService,
              private route: ActivatedRoute,
              private router: Router) {
    this.payPeriod = new PayPeriod();
  }

  onSubmit(payPeriod:any){
    this.payPeriodService.savePayPeriod(payPeriod)
      .then(successResponse =>{
        this.list();
      })
      .catch(errorResponse =>{

      });
  }

  list(){
    this.router.navigate(['/pay-period']);
  }

}
