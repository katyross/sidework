import { Component, OnInit } from '@angular/core';
import {Shift} from "../shift";
import {Restaurant} from "../../restaurant/restaurant";
import {ActivatedRoute, Router} from "@angular/router";
import {ShiftService} from "../shift.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-shift-info',
  templateUrl: './shift-info.component.html',
  styleUrls: ['./shift-info.component.css']
})
export class ShiftInfoComponent implements OnInit {

  id:number;
  shift: Shift = new Shift();
  restaurantList: Restaurant[];



  constructor(private route: ActivatedRoute,
              private router: Router,
              private activeModal: NgbActiveModal,
              private modalService: NgbModal,
              private shiftService: ShiftService) { }

  ngOnInit() {
    this.getShift();
    this.getRestaurants();
  }

  getShift(){
    if (this.id) {
      this.shiftService
        .getShift(this.id)
        .then(response => {
          this.shift = response;
        }).catch();
    }
  }

  updateShift(shift: Shift){
    this.shift = shift;
    this.shiftService
      .updateShift(this.id, this.shift)
      .then( successResponse => {

        }
      ).catch();
  }
  openUpdateModal(content){
    this.modalService.open(content);
  }
  refresh(): void {
    window.location.reload();
  }

  getRestaurants(): any{
    this.shiftService.getAllRestaurants()
      .then(successResponse => {
      this.restaurantList = successResponse;
    })
      .catch(errorResponse => {
      });
  }

  deleteShift(id: number){
    this.shiftService.deleteShift(id)
      .then(successResponse => {
        this.refresh();
      })
      .catch();
  }
}
