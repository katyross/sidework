import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import{Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseUrl = 'http://localhost:8080/sidework/angular/restaurants';
  constructor(private http: HttpClient) { }

  getRestaurant(id: number): Observable<any> {
    return this.http.get('${this.baseUrl}/${id}');
  }

  addRestaurant(restaurant: Object): Observable<Object> {
    return this.http.post('${this.baseUrl}',restaurant);
  }

  updateRestaurant(id: number, value: any): Observable<Object> {
    return this.http.put('${this.baseUrl}/${id}', value);
  }

  deleteRestaurant(id: number): Observable<any> {
    return this.http.delete('${this.baseUrl}/${id}',{responseType: 'text'});
  }

  getRestaurantList(): Observable<any>{
    return this.http.get('{$this.baseUrl}');
  }
}
