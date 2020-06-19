import {Restaurant} from "../restaurant/restaurant";


export class Shift {
  id: number
  foodSales: number;
  barSales: number;
  ccTips: number;
  cashTips: number;
  payDay: string;
  inTime: string;
  outTime: string;
  restaurant: Restaurant;
}



