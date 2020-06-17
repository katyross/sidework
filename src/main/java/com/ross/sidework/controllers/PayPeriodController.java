package com.ross.sidework.controllers;

import com.ross.sidework.data.PayPeriodRepository;
import com.ross.sidework.models.PayPeriod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@RestController
@RequestMapping("/pay-period")
@CrossOrigin(  origins = { "http://localhost:4200"})
public class PayPeriodController {

    @Autowired
    private PayPeriodRepository payPeriodRepository;

    @GetMapping
    public List<PayPeriod> getAllPayPeriods() {
        List<PayPeriod> getList = (List<PayPeriod>) payPeriodRepository.findAll();
        getList.sort((PayPeriod o1, PayPeriod o2) -> o2.getId() - o1.getId() ); // sort by descending order of pay period creation
        return getList;
    }

    @PostMapping
     void addPayPeriod(@RequestBody PayPeriod pP){
        payPeriodRepository.save(pP);
    }
}
