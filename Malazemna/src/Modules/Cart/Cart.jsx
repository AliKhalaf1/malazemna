import React, { useEffect, useState } from "react";
import { Divider, List } from "@mui/material";
import LibraryItemCard from "../Library/components/LibraryItemCard";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState(location.state.cartItems);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const fees = 2.35;
  const tax = 1.5;
  const updatePrice = () => {
    const subTotal = cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
    console.log(subTotal);
    setSubTotalPrice(subTotal);
    setTotalPrice(subTotal + fees + tax);
  };
  useEffect(() => {
    updatePrice();
  }, []);

  useEffect(() => {
    // Go back if cart is empty
    if (cartItems.length === 0) {
      window.history.back();
    }
    updatePrice();
  }, [cartItems]);

  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex === -1) {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    } else if (item.count === 0) {
      setCartItems((prevCartItems) => {
        return prevCartItems.filter((cartItem) => cartItem.id !== item.id);
      });
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].count = item.count;
      setCartItems(updatedCartItems);
    }
  };

  return (
    <>
      <h1 className="text-[30px] font-bold p-3 text-center text-black">
        Checkout
      </h1>
      <List style={{ backgroundColor: "transparent" }}>
        {cartItems.map((item) => (
          <LibraryItemCard
            key={item.id}
            id={item.id}
            item={item}
            initialCount={item.count}
            addToCart={addToCart}
          />
        ))}
      </List>
      <Divider></Divider>
      <Divider></Divider>
      <div className="p-4 text-black">
        <div className="flex justify-between mb-2">
          <p>Subtotal:</p>
          <p>EGP{subTotalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Fees:</p>
          <p>EGP{fees.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Tax:</p>
          <p>EGP{tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Total Amount:</p>
          <p className="font-bold">EGP{totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex justify-end mr-5">
        <a href="/orders">
          <button className=" bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded shadow">
            Checkout
          </button>
        </a>
      </div>
    </>
  );
};

export default Cart;
