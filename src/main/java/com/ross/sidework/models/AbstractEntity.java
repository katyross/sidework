package com.ross.sidework.models;

import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@Getter
public @Data abstract class AbstractEntity {
    @Id
    @GeneratedValue
    @Setter(AccessLevel.PROTECTED)
    private int id;
}
