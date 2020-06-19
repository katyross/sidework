package com.ross.sidework.models;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
    @NotBlank(message = "enter payDay in dd/mm/yyyy format")
    private String payDay;

    @DateTimeFormat(pattern = "dd/mm/yyyy hh:mm:a")
    @NotBlank(message = "enter in dd/mm/yyyy hh:mm a format")
    private String inTime,outTime;

    @ManyToOne
    private Restaurant restaurant;

    public Shift (){}

    public Shift( double foodSales, double barSales, double ccTips,
                 double cashTips, String payDay,
                  String inTime, String outTime, Restaurant restaurant){
        this.foodSales = foodSales;
        this.barSales = barSales;
        this.ccTips = ccTips;
        this.cashTips = cashTips;
        this.payDay = payDay;
        this.inTime = inTime;
        this.outTime = outTime;
        this.restaurant = restaurant;
    }


   }
