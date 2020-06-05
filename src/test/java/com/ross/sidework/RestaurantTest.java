package com.ross.sidework;

import com.ross.sidework.models.Restaurant;
import org.junit.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

import static org.junit.Assert.*;


public class RestaurantTest {
    private Restaurant testRestaurant = new Restaurant("3 Monkeys", .025, .035, 5.46);
    private ValidatorFactory validatorFactory = Validation.buildDefaultValidatorFactory();
    private Validator validator = validatorFactory.getValidator();
    private Restaurant wrongTestRestaurant;

    @Test
    public void createRestaurantObject(){
        assertEquals(.025,testRestaurant.getFoodTipOutPCT(),.000);
    }

    @Test
    public void shouldHaveNoViolations(){
        Set<ConstraintViolation<Restaurant>> violations = validator.validate(testRestaurant);
        assertTrue(violations.isEmpty());
    }

    @Test
    public void detectsInvalidName() {
        // too high of foodSales input
        wrongTestRestaurant = new Restaurant ( "x", .025, .035, 5.46);
        Set<ConstraintViolation<Restaurant>> violations = validator.validate(wrongTestRestaurant);
        assertEquals(violations.size(),1,.00);

        ConstraintViolation<Restaurant> violation = violations.iterator().next();
        assertEquals("Name must be between 3 and 20 characters",violation.getMessage());
    }

    @Test
    public void detectsInvalidTipOutPCT() {
        // too high of foodSales input
        wrongTestRestaurant = new Restaurant ( "xxx", .0, .35, 5.46);
        Set<ConstraintViolation<Restaurant>> violations = validator.validate(wrongTestRestaurant);
        assertEquals(violations.size(),1,.00);

        ConstraintViolation<Restaurant> violation = violations.iterator().next();
        assertEquals("must be a percentage between .2 and 0",violation.getMessage());
    }

}
