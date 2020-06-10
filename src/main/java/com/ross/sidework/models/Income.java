package com.ross.sidework.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Income {
    @Id
    @GeneratedValue
    private int id;

    @OneToMany
    private List<Shift> shifts = new ArrayList<>();

    private double totalIncome; //before deductions

    public Income (){}

    public Income (List<Shift> shifts){
        this.shifts = shifts;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Shift> getShifts() {
        return shifts;
    }

    public void setShifts(List<Shift> shifts) {
        this.shifts = shifts;
    }

    public double getTotalIncome() {
        double totalIncome = 0;
        for (Shift shift: this.shifts){
            totalIncome += shift.getTakeHomePay();
        }
        return totalIncome;
    }

    public void setTotalIncome() {
        this.totalIncome = getTotalIncome();
    }
}
