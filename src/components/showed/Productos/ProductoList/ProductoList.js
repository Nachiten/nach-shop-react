import React from "react";

import ProductoItem from "../ProductoItem/ProductoItem";
import "./ProductoList.css";

const ProductoList = (props) => {
   const items = [
      {
         id: "item1",
         imageSrc: "/assets/img/Item1.png",
         imageAlt: "Item1Image",
         itemName: "Nombre Item 1",
         itemDescr:
            "Velit dignissim sodales ut eu sem integer vitae justo eget",
         price: 15.05,
      },
      {
         id: "item2",
         imageSrc: "/assets/img/Item2.png",
         imageAlt: "Item2Image",
         itemName: "Nombre Item 2",
         itemDescr:
            "Vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit " +
            "cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus " +
            "et magnis dis parturient montes nascetur",
         price: 25.1,
      },
      {
         id: "item3",
         imageSrc: "/assets/img/Item3.png",
         imageAlt: "Item3Image",
         itemName: "Nombre Item 3",
         itemDescr: "Convallis a cras semper auctor",
         price: 32.4,
      },
      {
         id: "item4",
         imageSrc: "/assets/img/Item1.png",
         imageAlt: "Item1Image",
         itemName: "Nombre Item 4",
         itemDescr:
            "Velit dignissim sodales ut eu sem integer vitae justo eget",
            price: 18,
      },
      {
         id: "item5",
         imageSrc: "/assets/img/Item2.png",
         imageAlt: "Item2Image",
         itemName: "Nombre Item 5",
         itemDescr:
            "Vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit " +
            "cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus " +
            "et magnis dis parturient montes nascetur",
         price: 48,
      },
      {
         id: "item6",
         imageSrc: "/assets/img/Item3.png",
         imageAlt: "Item3Image",
         itemName: "Nombre Item 6",
         itemDescr: "Convallis a cras semper auctor",
         price: 23,
      },
      {
         id: "item7",
         imageSrc: "/assets/img/Item1.png",
         imageAlt: "Item1Image",
         itemName: "Nombre Item 7",
         itemDescr:
            "Velit dignissim sodales ut eu sem integer vitae justo eget",
         price: 150000.23,
      },
      {
         id: "item8",
         imageSrc: "/assets/img/Item2.png",
         imageAlt: "Item2Image",
         itemName: "Nombre Item 8",
         itemDescr:
            "Vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit " +
            "cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus " +
            "et magnis dis parturient montes nascetur",
         price: 5.2,
      },
   ];

   const agregarItemEnCarrito = (item) => {
      props.agregarItemEnCarrito(item);
   };

   const showedItems = items.map((unItem) => {
      return (
         <ProductoItem
            item={unItem}
            agregarItemEnCarrito={agregarItemEnCarrito}
            key={unItem.id}
         />
      );
   });

   return (
      <div>
         <h1>Productos disponibles en Nach Shop</h1>

         <section className="basic-grid">{showedItems}</section>
      </div>
   );
};

export default ProductoList;
