import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Shift} from "./shift";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";
import {Restaurant} from "../restaurant/restaurant";

@Injectable(
)
export class ShiftService {
   shiftUrl: string;

  constructor(private http: HttpClient) {
    this.shiftUrl = 'http://localhost:8080/shifts'
  }

  saveShift(shift: Shift){
     return this.http.post(this.shiftUrl,shift).toPromise().then(this.handleSuccess).catch(this.handleError);
  }
  getAllRestaurants(){
    return this.http.get('http://localhost:8080/restaurants').toPromise().then
    (this.handleSuccess).catch(this.handleError);
  }

  deleteShift(id: number){
    return this.http.delete(this.shiftUrl +"/"+id);
  }

  getShiftList(): Observable<Shift[]>{
    return this.http.get<Shift[]>(this.shiftUrl);
  }
  // view individual shift
  getShift(id: number){
    return this.http.get<Shift>(this.shiftUrl+"/"+id);
  }
  private handleSuccess(successResponse): Promise<any>{ return Promise.resolve(successResponse)}
  private handleError(errorResponse):Promise<any>{return Promise.resolve(errorResponse)}
}
