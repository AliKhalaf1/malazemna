import React, { useEffect, useState } from "react";
import "./Orders.scss";
import { Divider, List } from "@mui/material";
import LibraryItemCard from "../Library/components/LibraryItemCard";
import { useLocation } from "react-router-dom";

const Orders = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const location = useLocation();
  const fees = 2.35;
  const tax = 1.5;
  const updatePrice = () => {
    setCartItems(location.state.cartItems);
    setSubTotalPrice(
      location.state.cartItems.reduce(
        (total, item) => total + item.price * item.count,
        0
      )
    );
    setTotalPrice(subTotalPrice + fees);
  };
  useEffect(() => {
    console.log(location);
    updatePrice();
  }, []);
  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex === -1) {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    } else {
      if (item.count === 0) {
        setCartItems((prevCartItems) => {
          return prevCartItems.filter((cartItem) => cartItem.id !== item.id);
        });
      } else {
        const updatedCartItems = [...cartItems];
        updatedCartItems[itemIndex].count = item.count;
        setCartItems(updatedCartItems);
      }
    }
    updatePrice();
  };

  // useEffect(() => {}, [cartItems]);
  return (
    <>
      <h1 className="text-[30px] font-bold p-3 text-center text-black">
        Checkout
      </h1>
      <div className="flex items-center bg-[#dbecf3] rounded-[15px] m-3">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-[#008089] placeholder-[#008089]::placeholder"
        />
        {/* <div className="p-2"><SearchOutlined /></div> */}
      </div>
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
          <p>${subTotalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Fees:</p>
          <p>${fees.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Tax:</p>
          <p>${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Total Amount:</p>
          <p className="font-bold">${(subTotalPrice + fees).toFixed(2)}</p>
        </div>
      </div>
      <div className="flex justify-end mr-5">
        <button className=" bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded shadow">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Orders;
