package com.ross.sidework.models;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public @Data
class PayPeriod {
    @Id
    @GeneratedValue
    private int id;

    @DateTimeFormat(pattern = "dd/MM/yyy")
    private String startPayPeriod, endPayPeriod;

    public PayPeriod() { }

    public PayPeriod(String startPayPeriod, String endPayPeriod){
        this.startPayPeriod = startPayPeriod;
        this.endPayPeriod = endPayPeriod;
    }
}
