import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton/";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";

import {
  FavoriteBorderOutlined,
  Favorite,
  BookOutlined,
} from "@mui/icons-material";
import { BookOnlineOutlined, Book } from "@mui/icons-material";
const LibraryItemCard = ({ id, item }) => {
  const count = useState(0);
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };
  const decrementCount = () => {
    if (count[0] > 0) count[1](count[0] - 1);
  };
  const incrementCount = () => {
    count[1](count[0] + 1);
  };

  return (
    <>
      <ListItem className=" w-100" key={id}>
        <img
          src={item.imageLink}
          className="flex items-center mr-2 p-2 border  border-solid rounded-[10px]
          h-[85px]
          w-[70px]"
        />
        <div className=" border space- rounded-[10px] border-solid bg-[#dcecf3]  pl-2 pr-1 pt-1 pb-3 w-100 grid grid-cols-4">
          <div className="flex-col flex col-span-3">
            <ListItemText
              //   disableTypography="true"
              primary={item.name}
              secondary={item.dr}
              primaryTypographyProps={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
              secondaryTypographyProps={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#29304a",
              }}
              className="font-bold pl-3"
            />
            <div className="flex relative">
              <button
                onClick={decrementCount}
                className="absolute z-40 left-2 w-6 h-6 flex items-center justify-center rounded-full bg-[#008089] text-white hover:bg-[#404b69] focus:bg-[#404b69]"
              >
                -
              </button>
              <span
                className="mt-0.5 relative left-5 pr-4 pl-4 text-white bg-[#29304a] text-sm max-w-xs
              w-14 text-center"
              >
                {count}
              </span>
              <button
                onClick={incrementCount}
                className="absolute left-16 w-6 h-6 flex items-center justify-center rounded-full bg-[#008089] text-white hover:bg-[#404b69] focus:bg-[#404b69]"
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-2 grid grid-rows-2 gap-2 justify-center content-center items-center justify-items-center">
            <IconButton
              className="p-0 row-span-1 text-slate-800"
              onClick={handleClick}
            >
              {isFilled ? <Book /> : <BookOutlined />}
            </IconButton>
            <div className="row-span-1 text-slate-800 text-center text-sm font-semibold">
              {item.price} EGP
            </div>
          </div>
        </div>
      </ListItem>
    </>
  );
};

LibraryItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageLink: PropTypes.string.isRequired,
    dr: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    numberOfPages: PropTypes.number.isRequired,
  }).isRequired,
};

export default LibraryItemCard;
