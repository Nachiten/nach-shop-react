import React, { useState } from 'react';

import "./ItemCarrito.css";

const ItemCarrito = (props) => {

   const item = props.item;

   const [currentAmount, setCurrentAmount] = useState(props.amount);
   const [newAmount, setNewAmount] = useState(props.amount);

   // Cuando se elije un nuevo valor, se actualiza newAmount
   const amountChangeHandler = (event) => {
      setNewAmount(event.target.value);
   }

   // Cuando llega un nuevo valor de props.amount (cuando se agrega mas cantidad a este item)
   // Entonces se setean currentAmount y newAmount al valor que llego
   if (currentAmount !== props.amount) {
      setCurrentAmount(props.amount);
      setNewAmount(props.amount);
   }

   return (
      <span className="card-carrito">
         <img src={item.imageSrc} alt={item.imageAlt} />
         <h2>{item.itemName}</h2>
         <h2>Cantidad: {currentAmount}</h2>
         <input type="number" min="1" max="50" step="1" value={newAmount} onChange={amountChangeHandler}></input>
         <button onClick={() => props.cambiarCantidadItem(item, newAmount)}>Cambiar Cantidad</button>
         <button onClick={() => props.eliminarItem(item)}>Eliminar</button>
      </span>
   );
};

export default ItemCarrito;