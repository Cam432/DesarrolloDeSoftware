package com.example.inicial1.services;

import com.example.inicial1.entities.Persona;
import com.example.inicial1.repositories.BaseRepository;
import com.example.inicial1.repositories.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaServicesImpl extends BaseServiceImpl <Persona, Long> implements  PersonaServices {
    @Autowired
    private PersonaRepository personaRepository;

    public PersonaServicesImpl(BaseRepository<Persona, Long> baseRepository){
        super(baseRepository);
    }


}
