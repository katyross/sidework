package com.ross.sidework.data;

import com.ross.sidework.models.Shift;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface ShiftRepository extends CrudRepository<Shift, Integer> {
}
