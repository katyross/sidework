import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {CreateRestaurantComponent} from "../create-restaurant/create-restaurant.component";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {RestaurantInfoComponent} from "../restaurant-info/restaurant-info.component";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
    restaurantList: Promise<any>;
    modalRef: NgbModalRef;
    id:number;

  constructor(private restaurantService: RestaurantService,
              private modalService: NgbModal) { }

    ngOnInit() {
    this.getRestaurantList();
    }

    getRestaurantList(){

      this.restaurantList = this.restaurantService.getRestaurantList()
        .then(successResponse => {
        this.restaurantList = successResponse;
      })
        .catch(errorResponse => {
          //error here
        });
    }

    openCreateModal(){
      this.modalRef = this.modalService.open(CreateRestaurantComponent);
    }

    openInfoModal(id:number) {
      this.id = id;
      this.modalRef = this.modalService.open(RestaurantInfoComponent);
      this.modalRef.componentInstance.id = this.id;
   }

}
