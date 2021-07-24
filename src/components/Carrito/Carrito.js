import ItemCarrito from "../ItemCarrito/ItemCarrito";

import "./Carrito.css";

const Carrito = () => {

   const itemsCarrito = [
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

   ];

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

