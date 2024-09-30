package com.example.inicial1.services;

import com.example.inicial1.entities.Autor;
import com.example.inicial1.repositories.AutorRepository;
import com.example.inicial1.repositories.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AutorService extends BaseServiceImpl <Autor, Long> {

    @Autowired
    private AutorRepository autorRepository;

    public AutorService(BaseRepository<Autor, Long> baseRepository) {
        super(baseRepository);
    }
}
