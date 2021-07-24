import React, {useState} from 'react';

import "./Item.css";

const Item = (props) => {

   const item = props.item;
   
   const [amount, setAmount] = useState("1");

   const amountChangeHandler = (event) => {
      setAmount(event.target.value);
   }

   return (
      <div className="card">

         <div className="item">
            <img src={item.imageSrc} alt={item.imageAlt} />
            <h2>{item.itemName}</h2>
            <p>{item.itemDescr}</p>
         </div>

         <div className="input">
            <input type="number" min="1" max="50" step="1" value={amount} onChange={amountChangeHandler}></input>
            <button>Añadir al Carro</button>
         </div>


      </div>
   );
};

export default Item;