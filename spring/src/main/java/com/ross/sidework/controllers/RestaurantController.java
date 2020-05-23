package com.ross.sidework.controllers;

import com.ross.sidework.data.RestaurantRepository;
import com.ross.sidework.models.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantRepository restaurantRepository;

    // list existing restaurants on index page
    @GetMapping
    public String getAllRestaurants(Model model){
        model.addAttribute("title", "Existing Workplaces");
        model.addAttribute("restaurants", restaurantRepository.findAll());
        return  "restaurants/index";
    }
    //create new restaurant, return to og restaurant tab
    //TODO: Post mapping to landing page?
    //public String process( @RequestBody Restaurant restaurant){
       // return restaurantRepository.save(restaurant);
   // }

}
