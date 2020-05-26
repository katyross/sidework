package com.ross.sidework.models;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public @Data class Restaurant {
    @NotNull
    private @Id @GeneratedValue
    @Setter(AccessLevel.PROTECTED) int id;
    @NotNull
    private String name;
    @NotNull
    private float foodTipOutPCT, barTipOutPCT, hourlyRate;

    public Restaurant(){}

    public Restaurant(String name, float foodTipOutPCT, float barTipOutPCT, float hourlyRate){
        this.name = name;
        //PCT = percentage
        this.foodTipOutPCT = foodTipOutPCT;
        this.barTipOutPCT = barTipOutPCT;
        this.hourlyRate = hourlyRate;
    }
}
