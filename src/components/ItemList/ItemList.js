import React from 'react';

import Item from '../Item/Item';
import "./ItemList.css";

const ItemList = () => {

   const items = [
      {
         imageSrc: "/assets/img/Item1.png",
         imageAlt: "Item1Image",
         itemName: "Nombre Item 1",
         itemDescr: "Velit dignissim sodales ut eu sem integer vitae justo eget",
      },
      {
         imageSrc: "/assets/img/Item2.png",
         imageAlt: "Item2Image",
         itemName: "Nombre Item 2",
         itemDescr: "Vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit " +
            "cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus " +
            "et magnis dis parturient montes nascetur",
      },
      {
         imageSrc: "/assets/img/Item3.png",
         imageAlt: "Item3Image",
         itemName: "Nombre Item 3",
         itemDescr: "Convallis a cras semper auctor",
      },
      {
         imageSrc: "/assets/img/Item1.png",
         imageAlt: "Item1Image",
         itemName: "Nombre Item 4",
         itemDescr: "Velit dignissim sodales ut eu sem integer vitae justo eget",
      },
      {
         imageSrc: "/assets/img/Item2.png",
         imageAlt: "Item2Image",
         itemName: "Nombre Item 5",
         itemDescr: "Vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit " +
            "cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus " +
            "et magnis dis parturient montes nascetur",
      },
      {
         imageSrc: "/assets/img/Item3.png",
         imageAlt: "Item3Image",
         itemName: "Nombre Item 6",
         itemDescr: "Convallis a cras semper auctor",
      },
      {
         imageSrc: "/assets/img/Item1.png",
         imageAlt: "Item1Image",
         itemName: "Nombre Item 7",
         itemDescr: "Velit dignissim sodales ut eu sem integer vitae justo eget",
      },
      {
         imageSrc: "/assets/img/Item2.png",
         imageAlt: "Item2Image",
         itemName: "Nombre Item 8",
         itemDescr: "Vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit " +
            "cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus " +
            "et magnis dis parturient montes nascetur",
      },
   ];

   const showedItems = items.map(unItem => { return <Item item={unItem} /> });

   return (
      <section className="basic-grid">
         {showedItems}
      </section>
   );

}




export default ItemList;