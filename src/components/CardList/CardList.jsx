import React from "react";
import CardCharacter from "./CardCharacter";
import "./style.scss";

const CardList = ({items}) => {
    return (
      <div className="list-container">
        {
          items.map((item, i) => (
            <CardCharacter item={item} i={i}/>
          ))
        }    
      </div>
    )
}

export default CardList;