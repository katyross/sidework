package com.ross.sidework.models;


import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.util.List;
import java.util.Locale;

public class IncomeData {


    // determine if shift is within existing PayPeriod
    public static boolean validatePayPeriod(Shift shift, PayPeriod payPeriod){
        DateTimeFormatter format = DateTimeFormatter.ofPattern("dd/MM/yyy");
        //in controller class, pay-period parameter will be determined by iterating through pay-period repository
        LocalDate shiftDate, payStart, payEnd;
        // determine date of shift, change to LocalDate type
        shiftDate = LocalDate.parse(shift.getDateOfShift(),format);
        payStart = LocalDate.parse(payPeriod.getStartPayPeriod(),format);
        payEnd = LocalDate.parse(payPeriod.getEndPayPeriod(),format);
        // determine if date is within existing pay period
        if (shiftDate.isBefore(payEnd)
                && shiftDate.isAfter(payStart)) {
            return true;
        } else {
            return false;
        }
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

    // calculates total income of shifts from given income list
    public static double getTotalIncome(Income income) {
        double totalIncome = 0;
        List<Shift> shifts = income.getShifts();
        for (Shift shift : shifts) {
            totalIncome += getTakeHomePay(shift);
        }
        return totalIncome;
    }

}
