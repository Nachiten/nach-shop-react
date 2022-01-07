import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";

import NotFound from "./components/NotFound/NotFound";
import ProductoList from "./components/showed/Productos/ProductoList/ProductoList";
import CarritoList from "./components/showed/Carrito/CarritoList/CarritoList";

const App = (props) => {
   const [itemsCarrito, setItemsCarrito] = useState([]);

   const sumarItemHandler = (item) => {
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

   const cambiarCantidadItemHandler = (item, cantidad) => {
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

   const eliminarItemHandler = (item) => {
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
      return <ProductoList agregarItemEnCarrito={sumarItemHandler} />;
   };

   const carritoObject = () => {
      return (
         <CarritoList
            eliminarItem={eliminarItemHandler}
            itemsCarrito={itemsCarrito}
            cambiarCantidadItem={cambiarCantidadItemHandler}
         />
      );
   };

   return (
      <section class="site-grid">
         <section class="header">
            <img src="/assets/img/Banner.png" alt="Imagen de banner" />
         </section>

         <section class="navbar">
            <ul>
               <li>
                  <a href="/">Inicio</a>
               </li>
               <li>
                  <a href="/productos">Productos</a>
               </li>
               <li>
                  <a href="/carrito">Carrito</a>
               </li>
               <li>
                  <a href="/otroLink">Otro Link</a>
               </li>
            </ul>
         </section>

         <section class="content">
            <BrowserRouter>
               <Switch>
                  <Route path="/" exact component={itemListObject} />
                  <Route path="/productos" component={itemListObject} />
                  <Route path="/carrito" component={carritoObject} />
                  <Route path="/" exact component={NotFound} />
               </Switch>
            </BrowserRouter>
         </section>

         <section class="sidebar-left">
            <h3>SIDEBAR LEFT</h3>
         </section>

         <section class="sidebar-right">
            <h3>SIDEBAR RIGHT</h3>
         </section>

         <section class="footer">
            <h3>FOOTER</h3>
         </section>
      </section>
   );
};

export default App;
