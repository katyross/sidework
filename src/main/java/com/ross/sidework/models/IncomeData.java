package com.ross.sidework.models;

import java.lang.reflect.Array;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class IncomeData {

    public static ArrayList<Shift> findShiftsByDateSearchValue(String fromDate, String toDate, Iterable<Shift> allShifts){
        ArrayList<Shift> results = new ArrayList<>();
            // if only wanting to check income on one date
        if (toDate.isBlank()){
            for (Shift shift : allShifts){
                if (shift.getInTime().contains(fromDate)){
                    results.add(shift);
                }
            }
        }

        if (!fromDate.equals(toDate)){
            for (Shift shift : allShifts) {
                if (validatePayPeriod(shift, fromDate,toDate)){
                    results.add(shift);
                }
            }
        }
        return results;
    }

    public static ArrayList<Shift> findShiftByPayDay(String payDay, Iterable<Shift> allShifts){
        ArrayList<Shift> results = new ArrayList<>();
        for (Shift shift : allShifts) {
            if (shift.getPayDay().contains(payDay)){
                results.add(shift);
            }
        }
        return results;
    }

    public static ArrayList<Shift> findShiftByRestaurant(String restaurant, Iterable<Shift> allShifts){
        ArrayList<Shift> results = new ArrayList<>();
        for (Shift shift: allShifts) {
            if (shift.getRestaurant().getName().toLowerCase().equals(restaurant.toLowerCase())){
                results.add(shift);
            }
        }
        return results;
    }

    // determines if shift date is within search parameters from/toDate (i refer between these two dates as a payPeriod)
    public static boolean validatePayPeriod(Shift shift, String fromDate, String toDate){
        DateTimeFormatter format = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        //in controller class, pay-period parameter will be determined by iterating through pay-period repository
        LocalDate shiftDate, payStart, payEnd;
        // determine date of shift, change to LocalDate type
        shiftDate = LocalDate.parse(shift.getInTime().substring(0,10),format);
        payStart = LocalDate.parse(fromDate,format);
        payEnd = LocalDate.parse(toDate,format);
        // determine if date is within existing pay period
        if (shiftDate.isBefore(payEnd)
                && shiftDate.isAfter(payStart)) {
            return true;
        } else if (shiftDate.isEqual(payEnd)|| shiftDate.isEqual(payStart)){
            return true;
        } else {
            return false;
        }
    }


    // so "see income by payday doesnt print multiple of same payday when choosing to see shifts by payday
    public static ArrayList<String> getPayDays(List<Shift> shifts){
        ArrayList<String> payDays = new ArrayList();
        for (Shift shift : shifts){
            if (!payDays.contains( shift.getPayDay())){
                payDays.add(shift.getPayDay());
            }
        }
        return payDays;
    }

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

    public static double getHourlyPay(Shift shift) throws ParseException {
        double hourlyPay = shift.getRestaurant().getHourlyRate() * getHoursWorked(shift);
        double round = Math.round(hourlyPay * 100.0)/100.0;
        return round;
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
