package com.ross.sidework.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.validation.constraints.*;

@Entity
public @Data
class Restaurant extends AbstractEntity{

    @NotBlank(message = "Name required")
    private String name;

    @DecimalMax(value = ".20", message = "must be a percentage between .2 and .01")
    @DecimalMin(value = ".01", message = "must be a percentage between .2 and .01")
    @NotBlank
    private double foodTipOutPCT, barTipOutPCT;

    @NotNull
    @DecimalMax(value = "20.20", message = "must be below 20.20 ph")
    @Min(0)
    private double hourlyRate;

    public Restaurant(){
    }

    public Restaurant(String name, double foodTipOutPCT, double barTipOutPCT, double hourlyRate){
        super();
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.barTipOutPCT = barTipOutPCT;
        this.foodTipOutPCT = foodTipOutPCT;
    }

}
