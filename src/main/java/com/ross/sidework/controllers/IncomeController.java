package com.ross.sidework.controllers;

import com.ross.sidework.data.ShiftRepository;
import com.ross.sidework.models.IncomeData;
import com.ross.sidework.models.Shift;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.*;

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
    public Map<String, Double> getTotalIncome(  @RequestParam String searchTerm, @RequestParam String searchType) throws ParseException {
        Iterable<Shift> allShifts = new ArrayList();
        Map<String, Double> totalIncome = new HashMap<String, Double>();

        double hours = 0, hourly = 0, tips = 0, tipOuts = 0;

        if (searchType.equals("findByPayDay")){
            allShifts = IncomeData.findShiftByPayDay(searchTerm,shiftRepository.findAll());
        } else if (searchType.equals("findByPayPeriod")){
            if (searchTerm.length()<20){
                allShifts = IncomeData.findBySingleDate(searchTerm,shiftRepository.findAll());
            } else {
                allShifts = IncomeData.findShiftsByDateSearchValue(searchTerm.substring(0, 10), searchTerm.substring(10, 20), shiftRepository.findAll());
            }
        } else if (searchType.equals("findByRestaurant")){
            allShifts = IncomeData.findShiftByRestaurant(searchTerm, shiftRepository.findAll());
        } else if (searchType.isEmpty() && searchTerm.isEmpty()){
            allShifts = (List<Shift>) shiftRepository.findAll();
        }

        for (Shift shift : allShifts) {
            hours += IncomeData.getHoursWorked(shift);
            hourly += IncomeData.getHourlyPay(shift);
            tips += IncomeData.getTakeHomePay(shift);
            tipOuts += IncomeData.getTipOutDeductions(shift);
        }


        totalIncome.put("TOTAL HOURS: ", IncomeData.roundNumbers(hours));
        totalIncome.put("TOTAL HOURLY: ", IncomeData.roundNumbers(hourly));
        totalIncome.put("TOTAL TIPS: ", IncomeData.roundNumbers(tips));
        totalIncome.put("TOTAL TIP-OUTS: ", IncomeData.roundNumbers(tipOuts));
        totalIncome.put("TOTAL TAKE-HOME: ", IncomeData.roundNumbers(hourly+tips));

        return totalIncome;
    }
}


