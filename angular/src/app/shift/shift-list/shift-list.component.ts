import {Component, OnInit, ViewEncapsulation,ViewChild} from '@angular/core';
import {Shift} from "../shift";
import {ShiftService} from "../shift.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Restaurant} from "../../restaurant/restaurant";
import {ShiftCreateComponent} from "../shift-create/shift-create.component";
import {ShiftInfoComponent} from "../shift-info/shift-info.component";


@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShiftListComponent implements OnInit {
  modalRef : NgbModalRef;
  shiftList: Array<Shift[]> =[];
  shift: Shift;
  restaurant: Restaurant;
  restaurantList: Restaurant[];
  id:number;



  constructor(private shiftService: ShiftService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal) {

    this.shift = new Shift();
    this.restaurantList = [];

  }

  ngOnInit() {
    this.getAllShifts();
    this.getRestaurants();
  }


  openCreateModal(){
    this.modalRef = this.modalService.open(ShiftCreateComponent);
  }

  getAllShifts(){
    return this.shiftService.getShiftList()
      .then( successResponse => {
      this.shiftList = successResponse;
    })
     .catch(errorResponse => {
        //error here
    })
  }

  openInfoModal(id:number) {
    this.id = id;
    this.modalRef = this.modalService.open(ShiftInfoComponent);
    this.modalRef.componentInstance.id = this.id;
  }

  getRestaurants(): any{
    this.shiftService.getAllRestaurants().then(successResponse => {
      this.restaurantList = successResponse;
    })
      .catch(errorResponse => {

      });
  }

}



