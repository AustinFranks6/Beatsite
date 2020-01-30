import React, { useContext } from "react";

import products from "../../data/products";

import Cart from "../cart";
import { CartContext } from "../cart/context";

import styled from "styled-components";

const Styles = styled.div`
  .main-container {
    padding-top: 5em;
    display: grid;
    grid-template-rows: auto auto;
    text-align: center;
    grid-row-gap: 0.5em;
    font-weight: 325;
  }

  .sub-container {
    display: grid;
    grid-template-columns: 20% 20% 40% 20%;
  }

  .item-name,
  .item-beat,
  .addto {
    align-self: center;
  }

  .item-name {
    text-transform: uppercase;
    font-size: 1.6em;
  }

  @media (max-width: 703px) {
    .item-name {
      font-size: 1em;
    }
  }

  button {
    border: 2px solid red;
    background-color: white;
    text-transform: uppercase;
    font-size: 1.2em;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  button:hover {
    background-color: red;
    color: white;
  }

  @media (max-width: 703px) {
    .button {
      font-size: 0.8em;
    }
  }

  audio {
    width: 75%;
  }
`;

export default function Store() {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      <Styles>
        <div className="main-container">
          {products.map(product => (
            <div>
              <div className="sub-container">
                <div className="item-img">
                  <img
                    src={`/images/${product.sku}.jpg`}
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                </div>

                <div className="item-name">{product.name}</div>

                <div className="item-beat">
                  <audio
                    controls="controls"
                    src={`/beats/${product.sku}.wav`}
                    controlsList="nofullscreen nodownload"
                  ></audio>
                </div>

                <div className="addto">
                  <button onClick={() => cartCtx.addToCart(product)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Styles>
      <Cart stripeToken="pk_test_Ts5zGclKjljrm2ESKSTJlQVi00gF3Jvptc" />
    </div>
  );
}
