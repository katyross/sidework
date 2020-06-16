package com.ross.sidework.models;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public @Data class Shift  {
    @Id
    @GeneratedValue
    private int id;

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
    private Restaurant restaurant;

    public Shift (){}


    public Shift( double foodSales, double barSales, double ccTips,
                 double cashTips, String dateOfShift, Restaurant restaurant){
        this.foodSales = foodSales;
        this.barSales = barSales;
        this.ccTips = ccTips;
        this.cashTips = cashTips;
        this.dateOfShift = dateOfShift;
        this.restaurant = restaurant;
    }

   }
