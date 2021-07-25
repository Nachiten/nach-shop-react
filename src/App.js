import React, { useState } from "react";

// eslint-disable-next-line 
import ItemList from "./components/ItemList/ItemList";
// eslint-disable-next-line 
import Carrito from "./components/Carrito/Carrito";

function App() {

   const [itemsCarrito, setItemsCarrito] = useState([]);

   const sumarItemEnCarrito = (item) => {
      const indexItemExistente = itemsCarrito.findIndex(unItem => unItem.id === item.id);

      // El item no existia, agrego uno nuevo
      if (indexItemExistente === -1) {
         setItemsCarrito((prevState) => {
            return [
               ...prevState,
               item,
            ]
         });

         // El item si existia, agrego la cantidad al existente
      } else {
         setItemsCarrito((prevState) => {

            const cantidadAnterior = prevState[indexItemExistente].amount;
            prevState.splice(indexItemExistente, 1);
            item.amount = parseInt(item.amount) + parseInt(cantidadAnterior);

            return [
               ...prevState,
               item,
            ];
         });

      }
   };

   const cambiarCantidadItem = (item, cantidad) => {
      const indexItemExistente = itemsCarrito.findIndex(unItem => unItem.id === item.id);

      // Fijo la nueva cantidad en el item existente 
      setItemsCarrito((prevState) => {
         prevState.splice(indexItemExistente, 1);
         item.amount = cantidad;

         return [
            ...prevState,
            item,
         ];
      });
   };

   const eliminarItem = (item) => {
      const indexItemExistente = itemsCarrito.findIndex(unItem => unItem.id === item.id);

      // Elimino el item
      setItemsCarrito((prevState) => {
         prevState.splice(indexItemExistente, 1);

         return [
            ...prevState,
         ];
      });
   }

   return (
      <div>
         <ItemList agregarItemEnCarrito={sumarItemEnCarrito} />
         <Carrito eliminarItem={eliminarItem} itemsCarrito={itemsCarrito} cambiarCantidadItem={cambiarCantidadItem} />
      </div>
   );
}

export default App;
