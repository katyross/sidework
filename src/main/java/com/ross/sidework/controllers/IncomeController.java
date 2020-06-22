package com.ross.sidework.controllers;

import com.ross.sidework.data.RestaurantRepository;
import com.ross.sidework.data.ShiftRepository;
import com.ross.sidework.models.IncomeData;
import com.ross.sidework.models.Shift;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/income")
@CrossOrigin( origins = { "http://localhost:4200"})
public class IncomeController {
    @Autowired
    private  ShiftRepository shiftRepository;

    @GetMapping("/payDay")
    public ArrayList<String> getPayDays(){
        List<Shift> allShifts = (List<Shift>) shiftRepository.findAll();
        return IncomeData.getPayDays(allShifts);
    }

    @GetMapping
    @ResponseBody
    public Map<String, Double> getTotalIncome() throws ParseException {

            Map<String, Double> totalIncome = new HashMap<String, Double>();
            List<Shift> allShifts = (List<Shift>) shiftRepository.findAll();

            double hours = 0, hourly = 0, tips = 0, tipOuts = 0;

            for (Shift shift : allShifts) {
                hours += IncomeData.getHoursWorked(shift);
                hourly += IncomeData.getHourlyPay(shift);
                tips += IncomeData.getTakeHomePay(shift);
                tipOuts += IncomeData.getTipOutDeductions(shift);
            }
            double roundHours = Math.round(hours * 100.0)/100.0;
            double roundTipOuts = Math.round(tipOuts * 100.0)/100.0;

            totalIncome.put("TOTAL HOURS:", roundHours);
            totalIncome.put("TOTAL HOURLY:", hourly);
            totalIncome.put("TOTAL TIPS:", Math.round(tips * 100.0)/100.0);
            totalIncome.put("TOTAL TIP-OUTS:", roundTipOuts);
            totalIncome.put("TOTAL TAKE-HOME:", Math.round((hourly+tips) * 100.0)/100.0);

            return totalIncome;

    }
}


