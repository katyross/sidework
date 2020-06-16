package com.ross.sidework.data;

import com.ross.sidework.models.Income;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface IncomeRepository extends CrudRepository<Income, Integer> {
}
