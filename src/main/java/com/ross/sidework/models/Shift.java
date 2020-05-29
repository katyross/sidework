package com.ross.sidework.models;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.*;
import javax.xml.transform.Source;

@Entity
public @Data class Shift extends AbstractEntity {

    @NotNull
    @Min(value = 0, message = "must be between 0 and 10000")
    @Max(value = 10000,message = "must be between 0 and 10000")
    private double foodSales, barSales;

    @NotNull
    @Min(value = 0, message = "must be between 0 and 3000")
    @Max(value = 3000,message = "must be between 0 and 3000")
    private double ccTips, cashTips; // credit card

    @DateTimeFormat(pattern = "dd/mm/yyyy")
    @NotBlank(message = "enter date of shift in dd/mm/yyyy format")
    private String dateOfShift;

    @ManyToOne
    @NotNull(message = "select the restaurant you worked at for this shift")
    private Restaurant restaurant;

    public Shift (){}


    public Shift(double foodSales, double barSales, double ccTips,
                 double cashTips, String dateOfShift, Restaurant restaurant){
        super();
        this.foodSales = foodSales;
        this.barSales = barSales;
        this.ccTips = ccTips;
        this.cashTips = cashTips;
        this.dateOfShift = dateOfShift;
        this.restaurant = restaurant;
    }


    public double getTipOutDeductions(){
        // calculate amount to be removed from tips based on tipout rate for sales based on if they are bar sales or food sales
        double foodTipOut = this.foodSales * this.restaurant.getFoodTipOutPCT();
        double barTipOut = (this.barSales * this.restaurant.getFoodTipOutPCT()) +
                (this.barSales * this.restaurant.getBarTipOutPCT());
        // add amounts together, multiply by one to subtract from tips
        double totalTipOut = (foodTipOut + barTipOut) * -1;
        return totalTipOut;
    }

    public double getTakeHomePay(){
       return  this.cashTips + this.ccTips + this.getTipOutDeductions();
    }

}
