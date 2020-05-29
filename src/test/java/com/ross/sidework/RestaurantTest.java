package com.ross.sidework;

import com.ross.sidework.models.Restaurant;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;


public class RestaurantTest {
    Restaurant testRestaurant;

    @Before
    @Test
    public void createRestaurantObject(){
        testRestaurant = new Restaurant("3 Monkeys", .025, .035,5.46);
        assertEquals(.025,testRestaurant.getFoodTipOutPCT(),.000);
    }

}
