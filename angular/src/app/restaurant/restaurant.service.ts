import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import{Observable} from "rxjs";
import {Restaurant} from "./restaurant";

@Injectable()
export class RestaurantService {

  private restaurantUrl: string;

  constructor(private http: HttpClient) {
    this.restaurantUrl = 'http://localhost:8080/restaurants';
  }

  getRestaurant(id: number) : Observable<any>{
    return this.http.get(this.restaurantUrl +'/info/'+id);
  }

  save(restaurant: Restaurant) {
    return this.http.post<Restaurant>(this.restaurantUrl,restaurant);
  }

  // updateRestaurant(id: number, value: any): Observable<Object> {
  //   return this.http.put('${this.baseUrl}/${id}', value);
  // }
  //

  deleteRestaurant(id: number){
    return this.http.delete(this.restaurantUrl +"/"+id);
  }

  getRestaurantList(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.restaurantUrl);
  }
}
