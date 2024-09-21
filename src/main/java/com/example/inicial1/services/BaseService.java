package com.example.inicial1.services;

import java.util.List;

public interface BaseService <E> {
    public List <E> findAll() throws Exception;     //lista de todas las personas en la base de datos
    public  E findById(Long id) throws Exception;   //trae una persona de acuerdo a su id
    public E save(E entity) throws Exception;       // crea nueva entidad
    public E update(Long id, E entity) throws Exception;    //actualiza entidad
    public boolean delete(long id) throws Exception;        //elimina registo de la base de datos
}
