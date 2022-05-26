import React from "react";
import "./ProductCard.css"
import Draggable from "react-draggable";


export function ProductCard({ id, name, imgSrc }) {
  return (
    <div>
      <Draggable>
        <img src={imgSrc} alt={name} className="meme-img1"  draggable="false"/>
        </Draggable>
      
    </div>
  );
}
