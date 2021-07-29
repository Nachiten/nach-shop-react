import React from "react";
import ItemCarrito from "../ItemCarrito/ItemCarrito";

import "./Carrito.css";

const Carrito = (props) => {
   let itemsCarrito = props.itemsCarrito;

   let showedItems = "No hay ningun item en el carrito.";

   if (itemsCarrito.lenght !== 0) {
      showedItems = itemsCarrito.map((unItem) => {
         return (
            <ItemCarrito
               eliminarItem={props.eliminarItem}
               cambiarCantidadItem={props.cambiarCantidadItem}
               item={unItem}
               amount={unItem.amount}
               key={unItem.id}
            />
         );
      });
   }

   return (
      <div>
         <h1>Tu Carrito</h1>
         <section className="basic-grid-carrito">{showedItems}</section>
      </div>
   );
};

export default Carrito;
