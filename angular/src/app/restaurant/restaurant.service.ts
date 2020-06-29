import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Restaurant} from "./restaurant";
import {ApiConstants} from "../api-constants";

@Injectable()
export class RestaurantService {

  private restaurantUrl: string;

  constructor(private http: HttpClient) {
    this.restaurantUrl = 'http://localhost:8080/restaurants';
  }

  getRestaurant(id: number) : Promise<any>{
    return this.http.get(ApiConstants.RESTAURANT_ENDPOINT +'/info/'+id)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  save(restaurant: Restaurant) {
    return this.http.post<Restaurant>(this.restaurantUrl,restaurant)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  updateRestaurant(id: number, restaurant: Restaurant): Promise<any> {
    return this.http
      .put(ApiConstants.RESTAURANT_ENDPOINT + "/update/" + id, restaurant)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }


  deleteRestaurant(id: number){
    return this.http.delete(ApiConstants.RESTAURANT_ENDPOINT +"/info/"+id)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  getRestaurantList(): Promise<any>{
    return this.http.get<Restaurant[]>(this.restaurantUrl)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  private handleSuccess(successResponse): Promise<any>{ return Promise.resolve(successResponse);}
  private handleError(errorResponse):Promise<any>{return Promise.resolve(errorResponse);}
}
