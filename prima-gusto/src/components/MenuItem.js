import React from "react";


export default function MenuItem(props) {
    
  return (
    <div>
      {props.name}  : {props.desc} 
      <button name= '30cm' value={props.small } onClick={props.onAdd}>
        {props.small}
      </button> 
      <button name="40cm" value={props.medium} onClick={props.onAdd}>
        {props.medium} 
      </button>
      <button name="50cm" value={props.big} onClick={props.onAdd}>
        {props.big}
      </button>
      
      
    </div>
  );
}
