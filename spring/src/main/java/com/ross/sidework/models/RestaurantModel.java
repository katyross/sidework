package com.ross.sidework.models;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public @Data class RestaurantModel {

    private @Id @GeneratedValue
    @Setter(AccessLevel.PROTECTED) int id;
    private String name;
    private float foodTipOutPCT, barTipOutPCT, hourlyRate;

    public RestaurantModel(){}

    public RestaurantModel(String name, float foodTipOutPCT, float barTipOutPCT, float hourlyRate){
        this.name = name;
        //PCT = percentage
        this.foodTipOutPCT = foodTipOutPCT;
        this.barTipOutPCT = barTipOutPCT;
        this.hourlyRate = hourlyRate;
    }
}
