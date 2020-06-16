package com.ross.sidework.models;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public @Data class Income {

    @Id
    @GeneratedValue
    private int id;

    @OneToMany
    private List<Shift> shifts = new ArrayList<>();

    @ManyToOne
    private PayPeriod payPeriod;


    public Income (){}

    public Income (List<Shift> shifts, PayPeriod payPeriod){
        this.shifts = shifts;
        this.payPeriod = payPeriod;
    }
}
