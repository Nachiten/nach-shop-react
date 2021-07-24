import React, { useState } from "react";

// eslint-disable-next-line 
import ItemList from "./components/ItemList/ItemList";
// eslint-disable-next-line 
import Carrito from "./components/Carrito/Carrito";

function App() {

  const [itemsCarrito, setItemsCarrito] = useState([]);

  const sumarItemEnCarrito = (item) => {
    console.log("[App.js]");
    console.log(item);

    const indexItemExistente = itemsCarrito.findIndex(unItem => unItem.id === item.id);

    if (indexItemExistente === -1) {
      console.log("NO existia el item antes.");

      setItemsCarrito((prevState) => {
        return [
          ...prevState,
          item,
        ]
      });

    } else {
      console.log("SI existia el item antes.");

      setItemsCarrito((prevState) => {

        const cantidadAnterior = prevState[indexItemExistente].amount;

        prevState.splice(indexItemExistente, 1);

        item.amount = parseInt(item.amount) + parseInt(cantidadAnterior);

        const nuevoCarrito = [
          ...prevState,
          item,
        ];

        console.log("[App.js] NuevoCarrito:");
        console.log(nuevoCarrito);

        return nuevoCarrito;
      });

    }
  };

  return (
    <div>
      <ItemList agregarItemEnCarrito={sumarItemEnCarrito} />
      <Carrito itemsCarrito={itemsCarrito} />
    </div>
  );
}

export default App;
