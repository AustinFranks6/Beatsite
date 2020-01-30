import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context";

import styled from "styled-components";

function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`;
}

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
}

export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null);
  const ctx = useContext(CartContext);

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  function checkout() {
    stripe.redirectToCheckout({
      items: ctx.items.map(item => ({
        quantity: item.quantity,
        sku: item.sku
      })),
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled"
    });
  }

  const Styles = styled.div`
    table {
      width: 100%;
      border-collapse: collaspe;
      table-layout: fixed;
      padding-left: 100px;
    }

    th,
    tr,
    td {
      height: 75px;
    }

    table,
    th,
    tr,
    td {
    }

    tr:hover {
      background-color: #f5f5f5;
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
  `;

  return (
    <div>
      {" "}
      <Styles>
        <div className="main-container">
          <table>
            <thead className="cart-titles">
              <tr>
                <th>Beat image</th>
                <th>Beat title </th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody className="cart-info">
              {ctx.items.map(item => (
                <tr>
                  <td>
                    <img
                      src={`/images/${item.sku}.jpg`}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{formatPrice(item.price * item.quantity)}</td>
                </tr>
              ))}

              <tr className="cart-total">
                <td colSpan="2">Total:</td>
                <td>{formatPrice(totalPrice(ctx.items))}</td>
              </tr>

              <tr className="cart-checkout">
                <td colspan="3">
                  <button onClick={checkout}>Check Out</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Styles>
    </div>
  );
}
