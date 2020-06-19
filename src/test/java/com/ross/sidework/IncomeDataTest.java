package com.ross.sidework;

import com.ross.sidework.models.IncomeData;
import com.ross.sidework.models.Restaurant;
import com.ross.sidework.models.Shift;
import org.junit.Before;
import org.junit.Test;

import java.text.ParseException;

import static org.junit.Assert.assertEquals;

public class IncomeDataTest {

    private Restaurant testRestaurant = new Restaurant("3 Monkeys", .025, .035, 5.46);
    private  Shift testShift = new Shift(234.00, 345.00, 94.67, 13.00,
            "07/06/2020", "01/06/2020 01:45 PM","01/06/2020 11:52 PM", this.testRestaurant);

    @Test
    public void returnsHoursWorked() throws ParseException {
        assertEquals(10.12,IncomeData.getHoursWorked(testShift),.001);
    }

    @Test
    public void returnsHoursWorkedAMPM() throws ParseException {
        Shift testShift2 = new Shift(234.00, 345.00, 94.67, 13.00,
                 "07/06/2020", "01/06/2020 01:45 PM","02/06/2020 02:52 AM", this.testRestaurant);

        assertEquals(13.12,IncomeData.getHoursWorked(testShift2),.001);

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
