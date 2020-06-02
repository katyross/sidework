package com.ross.sidework;

import com.ross.sidework.models.Restaurant;
import com.ross.sidework.models.Shift;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;


public class ShiftTest {

    private  Restaurant testRestaurant = new Restaurant("3 Monkeys", .025, .035,5.46);
    private  Shift testShift = new Shift(234.00, 345.00, 94.67, 13.00, "21/01/2022", testRestaurant);
    private static ValidatorFactory validatorFactory= Validation.buildDefaultValidatorFactory();;
    private static Validator validator= validatorFactory.getValidator();;

    @AfterClass
    public static void close(){ validatorFactory.close();}

    @Before
    @Test
    public void createShiftObject(){
        assertEquals(94.67,testShift.getCcTips(),.001);
    }

    @Before
    @Test
    public void storesRestaurantObject(){
        assertEquals(.025,testShift.getRestaurant().getFoodTipOutPCT(),.001);
    }

    @Before
    @Test
    public void calculatesTotalTipOutDeductions(){
        assertEquals(-26.55,testShift.getTipOutDeductions(),.001);
    }

    @Before
    @Test
    public void calculatesTakeHomePay(){
        assertEquals(81.12, testShift.getTakeHomePay(),.001);
    }


    @Test
    public void shouldHaveNoViolations(){
        Shift aTestShift = new Shift(234.00, 345.00, 94.67, 13.00, "21/01/2022", testRestaurant);
        Set<ConstraintViolation<Shift>> violations = validator.validate(aTestShift);
        assertTrue(violations.isEmpty());
    }

    @Test
    public void detectsInvalidFoodSales() {
        // too high of foodSales input
        Shift wrongTestShift = new Shift(22341234324134.00, 345.00, 94.67, 13.00, "21/01/2022", testRestaurant);
        Set<ConstraintViolation<Shift>> violations = validator.validate(wrongTestShift);
        assertEquals(violations.size(),1,.00);

        ConstraintViolation<Shift> violation = violations.iterator().next();
        assertEquals("must be between 0 and 10000",violation.getMessage());
    }
}
