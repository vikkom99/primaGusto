import React from "react";

export default function BasketItem(props) {
  return (
    <div>
      {props.name} {props.size}: {props.desc} {props.basket}{" "}
      {props.price + "zł"} <button onClick= {() =>{props.delete(props.id)} }>delete</button>
    </div>
  );
}
