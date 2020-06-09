package com.ross.sidework.controllers;

import com.ross.sidework.data.RestaurantRepository;
import com.ross.sidework.data.ShiftRepository;
import com.ross.sidework.models.Restaurant;
import com.ross.sidework.models.Shift;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/shifts")
@CrossOrigin( origins = { "http://localhost:4200"})
public class ShiftController {
    @Autowired
    private ShiftRepository shiftRepository;
    @Autowired
    RestaurantRepository restaurantRepository;

    // list existing shifts
    @GetMapping
    public List<Shift> getAllShifts() {
        return (List<Shift>) shiftRepository.findAll();
    }

    //create new shift
    @PostMapping
    void createShift(@RequestBody Shift shift) {
        Optional optRestaurant = restaurantRepository.findById(shift.getRestaurant().getId());
        if (optRestaurant.isPresent()){
            Restaurant restaurant = (Restaurant) optRestaurant.get();
            shift.setRestaurant(restaurant);
            shiftRepository.save(shift);
        }

    }

    // list one shift's details
    @GetMapping("/info/{id}")
    public Shift getShiftById(@PathVariable(value = "id") int id) {
        Optional optShift = shiftRepository.findById(id);
        Shift shift = (Shift) optShift.get();
        Optional optRestaurant = restaurantRepository.findById(shift.getRestaurant().getId());
        Restaurant restaurant = (Restaurant) optRestaurant.get();
        shift.setRestaurant(restaurant);
        return shift;
    }

    // delete one shift
    @DeleteMapping("/info/{id}")
    void deleteShift(@PathVariable(value="id") int id){
        Optional optShift = shiftRepository.findById(id);
        if (optShift.isPresent()){
            Shift shift = (Shift) optShift.get();
            shiftRepository.delete(shift);
        }
    }

    @PutMapping("/update/{id}")
    public Shift updateShift(@PathVariable(value="id") int id,
                     @Valid @RequestBody Shift shiftInfo){
        Optional optShift = shiftRepository.findById(id);
        Optional optRestaurant = restaurantRepository.findById(shiftInfo.getRestaurant().getId());
        Restaurant restaurant = (Restaurant) optRestaurant.get();
        Shift shift = (Shift) optShift.get();
                shift.setRestaurant(restaurant);
                shift.setBarSales(shiftInfo.getBarSales());
                shift.setCashTips(shiftInfo.getCashTips());
                shift.setCcTips(shiftInfo.getCcTips());
                shift.setFoodSales(shiftInfo.getFoodSales());
                shift.setRestaurant(shiftInfo.getRestaurant());
            return shift;


    }
}
