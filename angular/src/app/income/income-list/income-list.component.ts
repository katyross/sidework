import { Component, OnInit } from '@angular/core';
import {IncomeService} from "../income.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {
  incomeList :  Map<string, number> = new Map<string,number>();

  constructor(private incomeService : IncomeService,
              private router: Router) { }

  ngOnInit() {
    this.getIncomeList();
  }

  getIncomeList(){
    return this.incomeService.getIncome()
      .then(successResponse => {
        this.incomeList = successResponse;
        })
      .catch(errorResponse => {
        //error HERE
      })
  }

}
