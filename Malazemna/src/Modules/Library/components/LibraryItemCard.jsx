import React, { useState } from "react";
import PropTypes from "prop-types";
import { Divider, ListItem, ListItemText } from "@mui/material";
const LibraryItemCard = ({ id, item, initialCount, addToCart }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [count, setcount] = useState(initialCount || 0);

  const accentColor = "bg-rose-700";
  const secondaryColor = "white";
  const handleClick = () => {
    setIsFilled(!isFilled);
  };
  const decrementCount = () => {
    if (count > 0) {
      addToCart({ ...item, count: count - 1 });
      setcount(count - 1);
    }
  };
  const incrementCount = () => {
    addToCart({ ...item, count: count + 1 });
    setcount(count + 1);
  };

  const primaryTypographyProps = {
    fontSize: "18px",
    fontWeight: "bold",
  };
  const secondaryTypographyProps = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#2b2b2b",
  };
  return (
    <>
      <ListItem className=" w-100" key={id}>
        <div className="bg-white  pl-2 pr-1 pt-1 pb-3 w-100 grid grid-cols-4">
          <div className="col-span-3">
            <div className="grid grid-rows-2">
              <ListItemText
                primary={item.name}
                secondary={item.dr}
                primaryTypographyProps={primaryTypographyProps}
                secondaryTypographyProps={secondaryTypographyProps}
                className="font-bold row-span-1"
              />
              <div className="pt-3 row-span-1">
                <div className="grid grid-cols-3">
                  <div className="text-sm col-span-1">EGP {item.price}</div>
                  <div className="col-span-1 max-h-0">
                    <button
                      onClick={decrementCount}
                      // className={`text-3xl absolute z-40 left-2 w-6 h-6 flex items-center justify-center rounded-full bg-[${accentColor}] text-orange-600 `}
                      className={`text-3xl bg-[${accentColor}] text-orange-600 `}
                    >
                      -
                    </button>
                    <span
                      className={`pr-3 pl-3 text-black bg-[${secondaryColor}] text-sm max-w-xs w-14 text-center`}
                    >
                      {count}
                    </span>
                    <button
                      onClick={incrementCount}
                      // className={`text-2xl absolute left-16 w-6 h-6 flex items-center justify-center rounded-full bg-[${accentColor}]  text-orange-600 `}
                      className={`text-2xl bg-[${accentColor}] text-orange-600 `}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-2 grid grid-rows-2 gap-2 justify-center content-center items-center justify-items-center">
            <IconButton
              className="p-0 row-span-1 text-slate-800"
              onClick={handleClick}
            >
              {isFilled ? <Book /> : <BookOutlined />}
            </IconButton>
          </div> */}
          <img
            src={item.imageLink}
            className="flex items-center mr-2 p-2
            col-span-1
          h-[85px]
          w-[70px]"
          />
        </div>
      </ListItem>
      <Divider
        sx={{ borderBottomWidth: 0.5, background: "black" }}
        light={false}
        variant="middle"
      />
    </>
  );
};

LibraryItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  initialCount: PropTypes.number,
  addToCart: PropTypes.func,
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
