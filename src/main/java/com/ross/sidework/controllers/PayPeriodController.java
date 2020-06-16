package com.ross.sidework.controllers;

import com.ross.sidework.data.PayPeriodRepository;
import com.ross.sidework.models.PayPeriod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pay-period")
@CrossOrigin(  origins = { "http://localhost:4200"})
public class PayPeriodController {

    @Autowired
    private PayPeriodRepository payPeriodRepository;

    @GetMapping
    public List<PayPeriod> getAllPayPeriods() {
        return (List<PayPeriod>) payPeriodRepository.findAll();
    }

    @PostMapping
     void addPayPeriod(@RequestBody PayPeriod pP){
        payPeriodRepository.save(pP);
    }
}
