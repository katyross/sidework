import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Shift} from "./shift";

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

  deleteShift(id): Promise<any>{
    return this.http.delete(this.shiftUrl +"/"+id).toPromise()
      .then(this.handleSuccess).catch(this.handleError);
  }

  getShiftList(){
    return this.http.get(this.shiftUrl).toPromise()
      .then(this.handleSuccess).catch(this.handleError);
  }

  // view individual shift
  getShift(id: number){
    return this.http.get(this.shiftUrl+"/"+id).toPromise()
      .then(this.handleSuccess).catch(this.handleError);
  }
  updateShift(id: number, value: any): Promise<any>{
    return this.http.put(this.shiftUrl+"/"+id, value).toPromise()
      .then(this.handleSuccess).catch(this.handleError);
  }

  private handleSuccess(successResponse): Promise<any>{ return Promise.resolve(successResponse)}
  private handleError(errorResponse):Promise<any>{return Promise.resolve(errorResponse)}
}
