import { Product } from "../types";

type MostrarProductoProps = {
    product: Product
}

export const MostrarProducto = ({product}: MostrarProductoProps) => {
  return (
    <div>
      {`Mi producto es un ${product.name} con un precio ${product.price} y un descuento ${product.discount}`}
    </div>
  );
};
