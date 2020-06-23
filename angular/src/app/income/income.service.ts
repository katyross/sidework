import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ApiConstants} from "../api-constants";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class IncomeService {


  constructor(private http: HttpClient) { }

  getIncomeByParams(searchType : string, searchTerm: string) {
    let params = new HttpParams().set("searchType",searchType).set("searchTerm",searchTerm);
    return this.http
      .get(ApiConstants.INCOME_ENDPOINT, {params})
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  getPayDayList(){
    return this.http
      .get(ApiConstants.INCOME_ENDPOINT + "/payDay")
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  private handleSuccess(successResponse): Promise<any>{ return Promise.resolve(successResponse);}
  private handleError(errorResponse):Promise<any>{return Promise.resolve(errorResponse);}
}
