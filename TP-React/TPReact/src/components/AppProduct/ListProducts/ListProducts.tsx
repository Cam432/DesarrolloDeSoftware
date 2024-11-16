import { FC } from "react";
import { Button, Card } from "react-bootstrap";

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

interface IPropsListProducts {
  arrItems: ItemProduct[];
}

export const ListProducts: FC<IPropsListProducts> = ({ arrItems }) => {
  return (
    <div
      className="p-1 m-3 border rounded d-grid gap-2"
      style={{
        gridTemplateColumns: "repeat (2, 1fr",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {arrItems.map((el) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Img>{el.imagen}</Card.Img>
            <Card.Title>{el.nombre}</Card.Title>
            <Card.Text>${el.precio}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
