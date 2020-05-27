package com.ross.sidework.models;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public @Data class Shift extends AbstractEntity{
    @NotBlank
    @Size(min=0, max=10000, message = "must be between 0 and 10000")
    private float foodSales, barSales;
    @NotBlank
    @Size(min=0, max=3000, message = "must be between 0 and 3000")
    private float ccTips, cashTips; // credit card
    @DateTimeFormat(pattern = "dd/mm/yyyy")
    @NotBlank(message = "enter date of shift in dd/mm/yyyy format")
    private String dateOfShift;
    @ManyToOne
    @NotNull(message = "select the restaurant you worked at for this shift")
    private Restaurant restaurant;

    public Shift(){}

    public Shift(float foodSales, float barSales, float ccTips,
                 float cashTips, String dateOfShift, Restaurant restaurant){
        super();
        this.foodSales = foodSales;
        this.barSales = barSales;
        this.ccTips = ccTips;
        this.cashTips = cashTips;
        this.dateOfShift = dateOfShift;
        this.restaurant = restaurant;
    }
}
