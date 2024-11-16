import { useState } from "react";
import { FormProduct } from "./FormProduct/FormProduct";
import { Header } from "./Header/Header";
import { ListProducts } from "./ListProducts/ListProducts";

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

export const AppProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([]);
  const handleAddProduct = (newItem: ItemProduct) => {
    setProducts((prev) => [...prev, newItem]);
  };
  return (
    <div>
      <Header />
      <h2 className="text-center">Formulario</h2>
      <FormProduct handleAddProduct={handleAddProduct} />
      <h2 className="text-center">Productos</h2>
      {products.length > 0 ? (
        <ListProducts arrItems={products} />
      ) : (
        <h4 className="text-center">No hay productos</h4>
      )}
    </div>
  );
};
