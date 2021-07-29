import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import NotFound from "./components/NotFound/NotFound";
// eslint-disable-next-line 
import ItemList from "./components/ItemList/ItemList";
// eslint-disable-next-line 
import Carrito from "./components/Carrito/Carrito";

function App() {

   const [itemsCarrito, setItemsCarrito] = useState([]);

   const sumarItemEnCarrito = (item) => {
      const indexItemExistente = itemsCarrito.findIndex(unItem => unItem.id === item.id);


      // El item si existia, agrego la cantidad al existente
      // El item no existia, agrego uno nuevo
      if (indexItemExistente === -1) {
         setItemsCarrito((prevState) => {
            return [
               ...prevState,
               item,
            ]
         });
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

   const itemListObject = () => {
      return <ItemList agregarItemEnCarrito={sumarItemEnCarrito} />;
   };

   const carritoObject = () => {
      return <Carrito eliminarItem={eliminarItem} itemsCarrito={itemsCarrito} cambiarCantidadItem={cambiarCantidadItem} />;
   };

   return (
      <div>
         <BrowserRouter>
            <Switch>
               <Route path="/productos" component={itemListObject} />
               <Route path="/carrito" component={carritoObject} />
               <Route path="/" component={carritoObject} />
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
