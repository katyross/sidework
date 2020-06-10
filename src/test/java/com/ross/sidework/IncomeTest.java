package com.ross.sidework;

import com.ross.sidework.models.Income;
import com.ross.sidework.models.Restaurant;
import com.ross.sidework.models.Shift;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class IncomeTest {
    private Restaurant testRestaurant = new Restaurant("3 Monkeys", .025, .035, 5.46);
    private  Shift testShift = new Shift(234.00, 345.00, 94.67, 13.00, "21/01/2022", testRestaurant);
    private  Shift testShift2 = new Shift(500.00, 445.00, 100.00, 81.00, "21/01/2021", testRestaurant);
    private List<Shift> shiftList = new ArrayList<>();
    private Income testIncome = new Income();
    private void addShifts() {
        this.shiftList.add(testShift);
        this.shiftList.add(testShift2);
        this.testIncome = new Income(this.shiftList);
    }


    @Test
    public void returnsTotalIncome(){
        Restaurant testRestaurant = new Restaurant("3 Monkeys", .025, .035, 5.46);
        Shift testShift = new Shift(234.00, 345.00, 94.67, 13.00, "21/01/2022", testRestaurant);
        Shift testShift2 = new Shift(500.00, 445.00, 100.00, 81.00, "21/01/2021", testRestaurant);
        List<Shift> shiftList = new ArrayList<>();
        shiftList.add(testShift);
        shiftList.add(testShift2);
        Income testIncome = new Income(shiftList);
        double totalIncome = testShift.getTakeHomePay() + testShift2.getTakeHomePay();
        assertEquals(totalIncome,testIncome.getTotalIncome(),.001);
    }

    @Before
    @Test
    public void returnsShiftList(){
        this.addShifts();
        assertEquals(this.shiftList.size(),testIncome.getShifts().size());
    }

    @Before
    @Test
    public void returnsShiftTakeHomePay(){
        this.addShifts();
        assertEquals(this.testShift.getTakeHomePay(),this.testIncome.getShifts().get(0).getTakeHomePay(),.001);
    }

}
