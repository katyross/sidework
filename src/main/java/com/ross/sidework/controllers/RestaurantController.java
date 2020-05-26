package com.ross.sidework.controllers;

import com.ross.sidework.data.RestaurantRepository;
import com.ross.sidework.models.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class RestaurantController {
    @Autowired
    private RestaurantRepository restaurantRepository;
    // list existing restaurants on index page
    @GetMapping("/restaurants")
    public List<Restaurant> getAllRestaurants(){
        return (List<Restaurant>) restaurantRepository.findAll();
    }
    //create new restaurant
    @PostMapping("/restaurants")
     void createRestaurant( @RequestBody Restaurant restaurant){
          restaurantRepository.save(restaurant);
    }
    // list one restaurants details
    @GetMapping("/restaurants/info/{id}")
    public Optional<Restaurant> getRestaurantbyId(@PathVariable(value="id") int id){
        return restaurantRepository.findById(id);
    }
    //delete restaurant
//    @DeleteMapping("/")
//    void deleteRestaurant(){
//
//    }

}
