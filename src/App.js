import React, { useState } from "react";

// eslint-disable-next-line 
import ItemList from "./components/ItemList/ItemList";
// eslint-disable-next-line 
import Carrito from "./components/Carrito/Carrito";

function App() {

  const [itemsCarrito, setItemsCarrito] = useState([]);

  const sumarItemEnCarrito = (item) => {
    itemsCarrito = [
      ...itemsCarrito,
      item,
    ]
  };

  {/*let itemsCarrito = [
    {
       id: "item1",
       itemName: "Nombre Item 1",
       imageSrc: "/assets/img/Item1.png",
       imageAlt: "Item1Image",
       amount: 10,
    },
    {
       id: "item2",
       itemName: "Nombre Item 2 oaiwhdiawohdioawodh",
       imageSrc: "/assets/img/Item2.png",
       imageAlt: "Item2Image",
       amount: 15,
    },

 ];  */}

  return (
    <div>
      <ItemList agregarItemEnCarrito={sumarItemEnCarrito} />
      <Carrito itemsCarrito={itemsCarrito} />
    </div>
  );
}

export default App;
