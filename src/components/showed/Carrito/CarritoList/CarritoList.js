import React from "react";
import CarritoItem from "../CarritoItem/CarritoItem";

import "./CarritoList.css";

const CarritoList = (props) => {
   const showedItems = props.itemsCarrito.map((unItem) => {
      return (
         <CarritoItem
            eliminarItem={props.eliminarItem}
            cambiarCantidadItem={props.cambiarCantidadItem}
            item={unItem}
            amount={unItem.amount}
            key={unItem.id}
         />
      );
   });

   return (
      <div>
         <h1>Tu Carrito</h1>
         <section className="basic-grid-carrito">{showedItems}</section>
      </div>
   );
};

export default CarritoList;
