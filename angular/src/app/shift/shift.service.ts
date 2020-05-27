import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Shift} from "./shift";
import {Observable} from "rxjs";

@Injectable(
  //{providedIn: 'root'}
)
export class ShiftService {
  private shiftUrl: string;
  constructor(private http: HttpClient) {
    this.shiftUrl = 'http://localhost:8080/shifts'
  }

  public save(shift: Shift) {
    return this.http.post<Shift>(this.shiftUrl,shift);
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
}
