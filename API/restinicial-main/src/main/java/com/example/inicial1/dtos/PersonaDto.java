package com.example.inicial1.dtos;

//El uso del dto es para evitar en este caso traer más campos de los necesarios de la clase domicilio y persona

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Builder
public class PersonaDto {

    private Long id;
    private String nombre;
    private String apellido;
}
