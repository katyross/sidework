package com.ross.sidework.models;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class IncomeData {

    public static double getHoursWorked(Shift shift) throws ParseException {
        SimpleDateFormat format = new SimpleDateFormat("dd/mm/yyyy hh:mm a");
        long hoursWorked;

        Date inTime = format.parse(shift.getInTime());
        Date outTime = format.parse(shift.getOutTime());


        hoursWorked = outTime.getTime() - inTime.getTime();
        long days = TimeUnit.MILLISECONDS.toDays(hoursWorked);
        long hrs = TimeUnit.MILLISECONDS.toHours(hoursWorked) % 24;
        long min = TimeUnit.MILLISECONDS.toMinutes(hoursWorked) % 60;

        double findMinPCT = (double)min/60;
        double round = Math.round(findMinPCT * 100.0)/100.0;
        if (days > 0) {
            hrs += 24 * days;
            days = 0;
        }
        // returns value that may easily be multiplied by hourly rate to get hourly pay
        return days+hrs+round;
    }

    // calculates tip-out deductions based on restaurant tip-out percentages and shift bar/food sales
    public static double getTipOutDeductions(Shift shift){
        // calculate amount to be removed from tips based on tip-out rate for sales based on if they are bar sales or food sales
        double foodTipOut = shift.getFoodSales() * shift.getRestaurant().getFoodTipOutPCT();
        double barTipOut = (shift.getBarSales() * shift.getRestaurant().getFoodTipOutPCT()) +
                (shift.getBarSales() * shift.getRestaurant().getBarTipOutPCT());
        // add amounts together, multiply by one to subtract from tips
        double totalTipOut = (foodTipOut + barTipOut) * -1;
        return totalTipOut;
    }

    // calculates amount to be taken home after tip-out deductions
    public static double getTakeHomePay(Shift shift){
        double cashTips = shift.getCashTips();
        double ccTips = shift.getCcTips();
        return  cashTips + ccTips + getTipOutDeductions(shift);
    }

}
