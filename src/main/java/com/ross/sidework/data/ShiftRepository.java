package com.ross.sidework.data;

import com.ross.sidework.models.Shift;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShiftRepository extends CrudRepository<Shift, Integer> {
}
