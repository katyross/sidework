package com.ross.sidework.data;

import com.ross.sidework.models.PayPeriod;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PayPeriodRepository  extends CrudRepository<PayPeriod, Integer> {

}
