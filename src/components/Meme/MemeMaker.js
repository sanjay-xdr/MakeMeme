import "./MemeMaker.css"
import { useState, useReducer } from "react";
import { useParams } from "react-router-dom";

import { ProductCard } from "../ProductCard/ProductCard";

import Draggable from "react-draggable";

import { memeDB } from "../../data";
export default function MemeMaker() {
 

  const reducerFun = (state, action) => {
    switch (action.type) {
      case "TOP_HEADING":
        return { ...state, topHeading: action.payload };
      case "BOTTOM_HEADING":
        return { ...state, bottomHeading: action.payload };
      case "TOP_COLOR":
        return { ...state, topColor: action.payload };
      case "BOTTOM_COLOR":
        return { ...state, bottomColor: action.payload };
      case "INC_FONT":
        return { ...state, fontSize: state.fontSize + action.payload };
      case "DEC_FONT":
        return { ...state, fontSize: state.fontSize - action.payload };

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducerFun, {
    topHeading: "Top Text",
    topColor: "",
    bottomHeading: "Bottom Text",
    bottomColor: "",
    fontSize: 15
  });

  const { topHeading, bottomHeading, topColor, bottomColor, fontSize } = state;

  const { productId } = useParams();
  console.log(productId)

  function getProductDetails(products, productId) {
    return products.find((product) => product.id === productId);
  }
  const product = getProductDetails(memeDB.data, productId);

  return (
    <div className="App">
     

      <section className="meme-editor">

  

      <div>
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: "TOP_HEADING", payload: e.target.value })
          }
        />
        <input
          type="color"
          onChange={(e) =>
            dispatch({ type: "TOP_COLOR", payload: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: "BOTTOM_HEADING", payload: e.target.value })
          }
        />
        <input
          type="color"
          onChange={(e) =>
            dispatch({ type: "BOTTOM_COLOR", payload: e.target.value })
          }
        />
      </div>

      <div>
        <p>Font Size</p>
        <button onClick={() => dispatch({ type: "INC_FONT", payload: 2 })}>
          +
        </button>
        <p>{fontSize}</p>
        <button onClick={() => dispatch({ type: "DEC_FONT", payload: 2 })}>
          -
        </button>
      </div>
      </section>



<section className="meme-result">
<Draggable>
        <h3
          className="top-text"
          draggable="false"
          style={{ fontSize: `${fontSize}px`, color: `${topColor}`,zIndex:"1" ,height:"auto"}}

        >
          {topHeading}
        </h3>
      </Draggable>
      



     
      <ProductCard {...product} />
    

   

      <Draggable>
        <h3
          className="bottom-text"
          draggable="false"
          style={{ fontSize: `${fontSize}px`, color: `${bottomColor}` ,zIndex:"1" }}
        >
          {bottomHeading}
        </h3>
      </Draggable>


</section>
      
   
    </div>
  );
}
