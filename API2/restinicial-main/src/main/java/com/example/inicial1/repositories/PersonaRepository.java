package com.example.inicial1.repositories;

import com.example.inicial1.entities.Persona;
import org.springframework.stereotype.Repository;


@Repository
public interface PersonaRepository extends BaseRepository<Persona, Long> {

}