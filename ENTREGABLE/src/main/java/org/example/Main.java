package org.example;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {
    public static void main(String[] args) {
        EntityManagerFactory entityManagerFactory = null;
        EntityManager entityManager = null;

        try {
            entityManagerFactory = Persistence.createEntityManagerFactory("example-unit");
            entityManager = entityManagerFactory.createEntityManager();

            // Iniciar la transacción
            entityManager.getTransaction().begin();

            // Crear y persistir un Domicilio
            Domicilio domicilio = Domicilio.builder()
                    .nombreCalle("Calle sin nombre")
                    .numero(123)
                    .build();
            entityManager.persist(domicilio);

            // Crear y persistir un Cliente
            Cliente cliente = Cliente.builder()
                    .domicilio(domicilio)
                    .dni(49253684)
                    .apellido("Sosa")
                    .nombre("Mercedes")
                    .build();
            entityManager.persist(cliente);

            // Crear y persistir un Articulo
            Articulo articulo = Articulo.builder()
                    .cantidad(4)
                    .denominacion("Tostadora")
                    .precio(1599)
                    .build();
            entityManager.persist(articulo);

            // Crear y persistir una Categoria
            Categoria categoria = Categoria.builder()
                    .denominacion("Electrónica")
                    .build();
            entityManager.persist(categoria);

            // Asociar el Articulo con la Categoria
            articulo.getCategorias().add(categoria);
            categoria.getArticulos().add(articulo);
            entityManager.persist(articulo);
            entityManager.persist(categoria);

            // Crear y persistir un DetalleFactura
            DetalleFactura detalleFactura = DetalleFactura.builder()
                    .cantidad(2)
                    .subtotal(234)
                    .articulo(articulo)
                    .build();
            entityManager.persist(detalleFactura);

            // Crear y persistir una Factura
            Factura factura = Factura.builder()
                    .fecha("2022-06-07")
                    .numero(1)
                    .cliente(cliente)
                    .build();
            factura.getFacturas().add(detalleFactura);
            entityManager.persist(factura);

            // Confirmar la transacción
            entityManager.getTransaction().commit();

            // Consultar y mostrar las entidades persistidas
            Cliente retrievedCliente = entityManager.find(Cliente.class, cliente.getId());
            System.out.println("Retrieved Cliente: " + retrievedCliente.getNombre());

            Articulo retrievedArticulo = entityManager.find(Articulo.class, articulo.getId());
            System.out.println("Retrieved Articulo: " + retrievedArticulo.getDenominacion());

            Categoria retrievedCategoria = entityManager.find(Categoria.class, categoria.getId());
            System.out.println("Retrieved Categoria: " + retrievedCategoria.getDenominacion());

            DetalleFactura retrievedDetalleFactura = entityManager.find(DetalleFactura.class, detalleFactura.getId());
            System.out.println("Retrieved DetalleFactura: " + retrievedDetalleFactura.getCantidad());

            Factura retrievedFactura = entityManager.find(Factura.class, factura.getId());
            System.out.println("Retrieved Factura: " + retrievedFactura.getNumero());

        } catch (Exception e) {
            if (entityManager != null && entityManager.getTransaction().isActive()) {
                entityManager.getTransaction().rollback();
            }
            System.out.println(e.getMessage());
            System.out.println("No se pudo grabar las entidades");
        } finally {
            if (entityManager != null) {
                entityManager.close();
            }
            if (entityManagerFactory != null) {
                entityManagerFactory.close();
            }
        }
    }
}
