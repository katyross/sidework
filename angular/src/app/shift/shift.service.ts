import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Shift} from "./shift";
import {ApiConstants} from "../api-constants";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: "root"
})

export class ShiftService {

  constructor(private http: HttpClient) {}

  saveShift(shift: Shift){
     return this.http
       .post(ApiConstants.SHIFT_ENDPOINT,shift,httpOptions)
       .toPromise()
       .then(this.handleSuccess).catch(this.handleError);
  }

  getAllRestaurants(){
    return this.http
      .get(ApiConstants.RESTAURANT_ENDPOINT)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  deleteShift(id): Promise<any>{
    return this.http
      .delete(ApiConstants.SHIFT_ENDPOINT +"/info/"+id)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  getShiftList(){
    return this.http.get(ApiConstants.SHIFT_ENDPOINT).toPromise()
      .then(this.handleSuccess).catch(this.handleError);
  }

  getShift(id): Promise<any>{
    return this.http
      .get(ApiConstants.SHIFT_ENDPOINT + "/info/" +id)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  updateShift(id, shift: Shift): Promise<any>{
    return this.http
      .put( ApiConstants.SHIFT_ENDPOINT +"/update/"+id, shift)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }


  private handleSuccess(successResponse): Promise<any>{ return Promise.resolve(successResponse);}
  private handleError(errorResponse):Promise<any>{return Promise.resolve(errorResponse);}
}
