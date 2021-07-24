import React, {useState} from "react";
import ItemCarrito from "../ItemCarrito/ItemCarrito";

import "./Carrito.css";

const Carrito = (props) => {

   let itemsCarrito = props.itemsCarrito;

   const showedItems = itemsCarrito.map(unItem => { return <ItemCarrito item={unItem} /> });

   return (
      <div>
         <h1>Tu Carrito</h1>
         <section className="basic-grid-carrito">
            {showedItems}
         </section>
      </div>
   );
};

export default Carrito;

