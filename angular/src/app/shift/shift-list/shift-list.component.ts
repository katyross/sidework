import {Component, OnInit, ViewEncapsulation,ViewChild} from '@angular/core';
import {Shift} from "../shift";
import {ShiftService} from "../shift.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Restaurant} from "../../restaurant/restaurant";
import {ShiftUpdateComponent} from "../shift-update/shift-update.component";
import {ShiftCreateComponent} from "../shift-create/shift-create.component";


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

  openUpdateModal(){
    this.modalRef = this.modalService.open(ShiftUpdateComponent);
    this.modalRef.componentInstance.id = this.id;
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

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  getRestaurants(): any{
    this.shiftService.getAllRestaurants().then(successResponse => {
      this.restaurantList = successResponse;
    })
      .catch(errorResponse => {

      });
  }


  getShiftbyId(id:number,content:any){
    this.id=id;
    this.shiftService.getShift(this.id)
      .then(successResponse =>{
        this.shift = successResponse;
        this.openModal(content);
      })
      .catch();
  }

  deleteShift(id: number){
    this.shiftService.deleteShift(id)
      .then(successResponse => {
        this.ngOnInit();
      })
      .catch();
  }

}



