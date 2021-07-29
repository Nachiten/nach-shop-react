import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Route, Switch, BrowserRouter } from "react-router-dom";

// eslint-disable-next-line
import NotFound from "./components/NotFound/NotFound";
// eslint-disable-next-line
import ItemList from "./components/ItemList/ItemList";
// eslint-disable-next-line
import Carrito from "./components/Carrito/Carrito";

function App() {
   const [itemsCarrito, setItemsCarrito] = useState([]);

   const sumarItemEnCarrito = (item) => {
      const indexItemExistente = itemsCarrito.findIndex(
         (unItem) => unItem.id === item.id
      );

      // El item no existia, agrego uno nuevo
      if (indexItemExistente === -1) {
         setItemsCarrito((prevState) => {
            return [...prevState, item];
         });
      }
      // El item si existia, agrego la cantidad al existente
      else {
         setItemsCarrito((prevState) => {
            const cantidadAnterior = prevState[indexItemExistente].amount;

            const itemsAnteriores = prevState.splice(0, indexItemExistente);
            const itemsSiguientes = prevState.splice(1, prevState.length - 1);

            item.amount = parseInt(item.amount) + parseInt(cantidadAnterior);

            return [...itemsAnteriores, item, ...itemsSiguientes];
         });
      }
   };

   const cambiarCantidadItem = (item, cantidad) => {
      const indexItemExistente = itemsCarrito.findIndex(
         (unItem) => unItem.id === item.id
      );

      // Fijo la nueva cantidad en el item existente
      setItemsCarrito((prevState) => {
         const itemsAnteriores = prevState.splice(0, indexItemExistente);
         const itemsSiguientes = prevState.splice(1, prevState.length - 1);

         item.amount = cantidad;

         return [...itemsAnteriores, item, ...itemsSiguientes];
      });
   };

   const eliminarItem = (item) => {
      const indexItemExistente = itemsCarrito.findIndex(
         (unItem) => unItem.id === item.id
      );

      // Elimino el item
      setItemsCarrito((prevState) => {
         prevState.splice(indexItemExistente, 1);

         return [...prevState];
      });
   };

   const itemListObject = () => {
      return <ItemList agregarItemEnCarrito={sumarItemEnCarrito} />;
   };

   const carritoObject = () => {
      return (
         <Carrito
            eliminarItem={eliminarItem}
            itemsCarrito={itemsCarrito}
            cambiarCantidadItem={cambiarCantidadItem}
         />
      );
   };

   return (
      <div>
         {/*<BrowserRouter>
            <Switch>
               <Route path="/productos" component={itemListObject} />
               <Route path="/carrito" component={carritoObject} />
               <Route path="/" component={NotFound} />
            </Switch>
         </BrowserRouter>*/}
         <Carrito
            eliminarItem={eliminarItem}
            itemsCarrito={itemsCarrito}
            cambiarCantidadItem={cambiarCantidadItem}
         />
         <ItemList agregarItemEnCarrito={sumarItemEnCarrito} />
      </div>
   );
}

export default App;
