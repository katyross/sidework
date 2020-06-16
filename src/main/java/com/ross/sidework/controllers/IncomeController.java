package com.ross.sidework.controllers;

import com.ross.sidework.data.IncomeRepository;
import com.ross.sidework.models.Income;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/income")
@CrossOrigin(  origins = { "http://localhost:4200"})
public class IncomeController {
    @Autowired
    private IncomeRepository incomeRepository;

    @GetMapping
    public List<Income> getAllIncome() {
        return (List<Income>) incomeRepository.findAll();
    }
}
