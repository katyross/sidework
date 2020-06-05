import {Restaurant} from "../restaurant/restaurant";


export class Shift {
  id: number
  foodSales: number;
  barSales: number;
  ccTips: number;
  cashTips: number;
  dateOfShift: string;
  restaurant: Restaurant;
}


