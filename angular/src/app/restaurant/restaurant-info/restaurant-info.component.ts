import { Restaurant } from '../restaurant';
import {Component, OnInit} from '@angular/core';
import { RestaurantService} from '../restaurant.service';
import { Router, ActivatedRoute} from "@angular/router";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})

export class RestaurantInfoComponent implements OnInit {

  id: number;
  restaurant: Restaurant = new Restaurant();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private restaurantService: RestaurantService,
              public activeModal: NgbActiveModal,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant() {
    if (this.id) {
      this.restaurantService.getRestaurant(this.id)
        .then(successResponse => {
          this.restaurant = successResponse;
        }).catch();
    }
  }

  deleteRestaurant(id: number) {
    this.restaurantService.deleteRestaurant(id)
      .then(successResponse => {
        this.refresh();
      })
      .catch();
  }

  refresh(): void {
    window.location.reload();
  }

  openUpdate(content: any){
    this.modalService.open(content);
  }

  updateRestaurantClick( restaurant: Restaurant){
    this.restaurant = restaurant;
    this.restaurantService.updateRestaurant(this.id,this.restaurant)
      .then(successResponse => {

      }).catch();
  }

}
