package com.example.inicial1.services;

import com.example.inicial1.entities.Base;
import jakarta.transaction.Transactional;

import java.io.Serializable;
import java.util.List;

public interface BaseService <E extends Base, ID extends Serializable> {
    public List <E> findAll() throws Exception;     //lista de todas las personas en la base de datos
    public  E findById(ID id) throws Exception;   //trae una persona de acuerdo a su id
    public E save(E entity) throws Exception;       // crea nueva entidad
    public E update(ID id, E entity) throws Exception;    //actualiza entidad

    @Transactional
    E update(Long id, E entity) throws Exception;

    public boolean delete(ID id) throws Exception;        //elimina registo de la base de datos
}
