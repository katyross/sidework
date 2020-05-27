package com.ross.sidework.controllers;

import com.ross.sidework.data.RestaurantRepository;
import com.ross.sidework.models.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantRepository restaurantRepository;

    // list existing restaurants
    @GetMapping
    public List<Restaurant> getAllRestaurants() {
        return (List<Restaurant>) restaurantRepository.findAll();
    }

    //create new restaurant
    @PostMapping
    void createRestaurant(@RequestBody Restaurant restaurant) {
        restaurantRepository.save(restaurant);
    }

    // list one restaurants details
    @GetMapping("/info/{id}")
    public Restaurant getRestaurantbyId(@PathVariable(value = "id") int id) {
        Optional optRestaurant = restaurantRepository.findById(id);
            Restaurant restaurant = (Restaurant) optRestaurant.get();
            return restaurant;
    }
    // delete one restaurant
    @DeleteMapping("/{id}")
    void deleteRestaurant(@PathVariable(value="id") int id){
         Optional optRestaurant = restaurantRepository.findById(id);
        if (optRestaurant.isPresent()){
            Restaurant restaurant = (Restaurant) optRestaurant.get();
            restaurantRepository.delete(restaurant);
        }
    }

}
