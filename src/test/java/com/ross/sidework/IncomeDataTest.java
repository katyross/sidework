package com.ross.sidework;

import com.ross.sidework.models.*;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

public class IncomeDataTest {

    private Restaurant testRestaurant = new Restaurant("3 Monkeys", .025, .035, 5.46);
    private  Shift testShift = new Shift(234.00, 345.00, 94.67, 13.00, "01/06/2020", testRestaurant);
    private  Shift testShift2 = new Shift(500.00, 445.00, 100.00, 81.00, "31/05/2020", testRestaurant);
    private PayPeriod testPayPeriod = new PayPeriod("30/05/2020","30/05/2020");
    private PayPeriod testPayPeriod2 = new PayPeriod("30/05/2019","12/06/2019");
    private List<Shift> shiftList = new ArrayList<>();
    private Income testIncome = new Income(this.shiftList,this.testPayPeriod);

    @Test
    public void returnsTrueForCorrectPayPeriod() {
        assertTrue(IncomeData.validatePayPeriod(testShift, testPayPeriod));
    }

    @Test
    public void returnsFalseForIncorrectPayPeriod(){
        assertFalse(IncomeData.validatePayPeriod(testShift,testPayPeriod2));
    }

    @Test
    public void setsCorrectIncome(){
        List<PayPeriod> payPeriodsList = new ArrayList<>();
        payPeriodsList.add(this.testPayPeriod);
        payPeriodsList.add(this.testPayPeriod2);
        for (PayPeriod pp : payPeriodsList){
            boolean isValid = IncomeData.validatePayPeriod(testShift,pp);
            if (isValid == true){
                this.testIncome.getShifts().add(testShift);
            }
        }
        assertEquals(testIncome.getShifts().get(0),testShift);
    }
    @Test
    public void doesntSetIncorrectIncome(){
            boolean isValid = IncomeData.validatePayPeriod(testShift2,testPayPeriod2);
            if (isValid==true){
                this.testIncome.getShifts().add(testShift2);
            }
        assertEquals(0, testIncome.getShifts().size());
    }

    @Before
    @Test
    public void calculatesTotalTipOutDeductions(){
        assertEquals(-26.55, IncomeData.getTipOutDeductions(this.testShift),.001);
    }

    @Before
    @Test
    public void calculatesTakeHomePay(){
        assertEquals(81.12, IncomeData.getTakeHomePay(this.testShift),.001);
    }
}
