import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiConstants} from "../api-constants";

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http: HttpClient) { }

  getIncome(){
    return this.http
      .get(ApiConstants.INCOME_ENDPOINT)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  private handleSuccess(successResponse): Promise<any>{ return Promise.resolve(successResponse);}
  private handleError(errorResponse):Promise<any>{return Promise.resolve(errorResponse);}
}
