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
          <Link to={"/orders"} state={{ cartItems: cartItems }}>
            Checkout
          </Link>
        )}
      </button>
      <h1 className="text-[30px] font-bold p-3 text-center text-black">
        {library.name}
      </h1>

      <List style={{ backgroundColor: "transparent" }}>
        {items.map((item) => (
          <LibraryItemCard
            author={item.author}
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
