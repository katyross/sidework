package com.ross.sidework.controllers;

import com.ross.sidework.data.ShiftRepository;
import com.ross.sidework.models.Restaurant;
import com.ross.sidework.models.Shift;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/shifts")
public class ShiftController {
    @Autowired
    private ShiftRepository shiftRepository;

    // list existing shifts
    @GetMapping
    public List<Shift> getAllShifts() {
        return (List<Shift>) shiftRepository.findAll();
    }

    //create new shift
    @PostMapping
    void createShift(@RequestBody Shift shift) {
            shiftRepository.save(shift);
    }

    // list one shift's details
    @GetMapping("/info/{id}")
    public Shift getShiftbyId(@PathVariable(value = "id") int id) {
        Optional optShift = shiftRepository.findById(id);
        Shift shift = (Shift) optShift.get();
        return shift;
    }

    // delete one shift
    @DeleteMapping("/{id}")
    void deleteShift(@PathVariable(value="id") int id){
        Optional optShift = shiftRepository.findById(id);
        if (optShift.isPresent()){
            Shift shift = (Shift) optShift.get();
            shiftRepository.delete(shift);
        }
    }
}
