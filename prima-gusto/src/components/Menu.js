import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import MenuItem from "./MenuItem";
import BasketItem from "./BasketItem";
import Header from "./Header";
import Basket from "./Basket";

export default function Menu(props) {
  const [menu, setMenu] = useState([]);
  const [basket, setBasket] = useState([]);
  const menuCollectionRef = collection(db, "pizza");
  useEffect(() => {
    const getMenu = async () => {
      const data = await getDocs(menuCollectionRef);
      setMenu(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getMenu();
  }, []);
  let basketSum = 0;
  for (const pizza of basket) {
    basketSum += pizza.price;
  }
  const deleteItem = (id) => {
    setBasket(basket.filter((el) => el.id !== id));
  };

  const newMenu = menu.map((el) => {
    return (
      <div key={el.id}>
        <MenuItem
          
          name={el.name}
          desc={el.desc}
          small={el.small}
          medium={el.medium}
          big={el.big}
          onAdd={(e) => {
            setBasket([
              ...basket,
              {
                name: el.name,
                desc: el.desc,
                price: parseFloat(e.target.value),
                size: e.target.name,
                id: Date.now(),
              },
            ]);
          }}
        />
      </div>
    );
  });

  const newBasket = basket.map((el) => {
    return (
      <div key={el.id}>
        <BasketItem
          key={el.id}
          sum={basketSum}
          name={el.name}
          desc={el.desc}
          size={el.size}
          price={el.price}
          id={el.id}
          delete={deleteItem}
        />
        
      </div>
    );
  });
  console.log(basket);

  return (
    <div>
      <div>
        <Basket basket={newBasket} basketSum={basketSum} />
      </div>

      <div>{newMenu}</div>
      <h1></h1>
    </div>
  );
}
