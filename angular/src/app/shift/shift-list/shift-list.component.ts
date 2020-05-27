import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Shift} from "../shift";
import {ShiftService} from "../shift.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.css']
})
export class ShiftListComponent implements OnInit {
    shift: Observable<Shift[]>;
  constructor(private shiftService: ShiftService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.shift = this.shiftService.getShiftList();
  }
  deleteShift(id: number) {
    this.shiftService.deleteShift(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        });
    }

    getShift(id:number){
    this.router.navigate(['/shifts/info', id]);
    }
  }


