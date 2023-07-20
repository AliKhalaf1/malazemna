import React from "react";
import "./Library.scss";
import LibraryItemCard from "./components/LibraryItemCard";
import { ListGroup, Navbar } from "react-bootstrap";
import { List } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
const Library = () => {
  const items = [
    {
      id: 1,
      name: "Metabolism",
      price: 10.99,
      numberOfPages: 200,
      imageLink: "https://via.placeholder.com/50",
      dr: "دكتور ماهر",
    },
    {
      id: 2,
      name: "Kidney",
      price: 15.99,
      numberOfPages: 300,
      dr: "دكتور ماهر",
      imageLink: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "GIT",
      price: 12.99,
      numberOfPages: 250,
      dr: "دكتور ماهر",
      imageLink: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "git",
      price: 9.99,
      numberOfPages: 150,
      dr: "دكتور جلال",
      imageLink: "https://via.placeholder.com/50",
    },
    {
      id: 1,
      name: "Metabolism",
      price: 10.99,
      numberOfPages: 200,
      imageLink: "https://via.placeholder.com/50",
      dr: "دكتور ماهر",
    },
    {
      id: 2,
      name: "Kidney",
      price: 15.99,
      numberOfPages: 300,
      dr: "دكتور ماهر",
      imageLink: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "GIT",
      price: 12.99,
      numberOfPages: 250,
      dr: "دكتور ماهر",
      imageLink: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "git",
      price: 9.99,
      numberOfPages: 150,
      dr: "دكتور جلال",
      imageLink: "https://via.placeholder.com/50",
    },
  ];

  return (
    <>
      <h1 className="text-[30px] font-bold p-3 text-center text-black">
        Mktbet 3m Abdo
      </h1>

      <div className="flex items-center bg-[#dbecf3] rounded-[15px] m-3 sticky">
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
          <LibraryItemCard key={item.id} item={item} />
        ))}
      </List>
    </>
  );
};

export default Library;
