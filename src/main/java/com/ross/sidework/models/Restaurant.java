package com.ross.sidework.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.*;

@Entity
public @Data class Restaurant{

     @Id
     @GeneratedValue
     private int id;

    @NotBlank(message = "Name required")
    @Size(min=3, max=20, message = "Name must be between 3 and 20 characters")
    private String name;

    @DecimalMax(value = ".20", message = "must be a percentage between .2 and 0")
    @DecimalMin(value = ".00", message = "must be a percentage between .2 and 0")
    @NotNull
    private double foodTipOutPCT, barTipOutPCT;

    @NotNull
    @DecimalMax(value = "20.20", message = "must be below 20.20 ph")
    @Min(0)
    private double hourlyRate;

    public Restaurant(){ }

    public Restaurant( String name, double foodTipOutPCT, double barTipOutPCT, double hourlyRate){
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.barTipOutPCT = barTipOutPCT;
        this.foodTipOutPCT = foodTipOutPCT;
    }

}
