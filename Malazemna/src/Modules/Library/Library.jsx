import React, { useState } from "react";
import "./Library.scss";
import LibraryItemCard from "./components/LibraryItemCard";
import { List } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@mui/icons-material";
import db from "../../../db.json";
import { useParams } from "react-router-dom";

const Library = () => {
  const { id } = useParams();
  const library = db.find((item) => item.id === parseInt(id));
  const [cartItems, setCartItems] = useState([]);
  const items = library.items;

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
      <button
        disabled={cartItems.length === 0}
        className="fixed z-30 bottom-20 right-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded shadow"
      >
        {cartItems.length === 0 ? (
          "Checkout"
        ) : (
          <Link to={"/cart"} state={{ cartItems: cartItems }}>
            Checkout
          </Link>
        )}
      </button>
      <h1 className="text-[30px] font-bold p-3 text-center text-black">
        {library.name}
      </h1>
      <div className="flex items-center bg-[#dbecf3] rounded-[15px] m-3">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-[#008089] placeholder-[#008089]::placeholder"
        />
        <div className="p-2">
          <SearchOutlined />
        </div>
      </div>
      <List style={{ backgroundColor: "transparent" }}>
        {items.map((item) => (
          <LibraryItemCard
            id={item.id}
            key={item.id}
            item={item}
            initialCount={0}
            addToCart={addToCart}
          />
        ))}
      </List>
    </>
  );
};

export default Library;
