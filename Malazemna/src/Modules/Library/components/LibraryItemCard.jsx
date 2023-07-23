import React, { useState } from "react";
import PropTypes from "prop-types";
import { Divider, ListItem, ListItemText } from "@mui/material";
import { Card } from "react-bootstrap";
import "./LibraryItemCard.scss";
const LibraryItemCard = ({ id, item, initialCount, addToCart }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [count, setcount] = useState(initialCount || 0);

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
    <div className="library">
      <Card>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text className="location">{item.author}</Card.Text>
          <Card.Text className="location">{`${item.year} - ${item.college}`}</Card.Text>
          <Card.Text className="location">{`${item.price}EGP /  ${item.numberOfPages} pages `}</Card.Text>
        </Card.Body>
        <div className="img-container">
          <Card.Img variant="top" src={item.imageLink} />
          <div className="counter">
            <button
              onClick={decrementCount}
              // className={`text-3xl absolute z-40 left-2 w-6 h-6 flex items-center justify-center rounded-full bg-[${accentColor}] text-orange-600 `}
              className={`text-3xl  text-orange-600 `}
            >
              -
            </button>
            <span className={`text-black text-sm max-w-xs w-14 text-center`}>
              {count}
            </span>
            <button
              onClick={incrementCount}
              className={`text-2xl  text-orange-600 `}
            >
              +
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

LibraryItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  initialCount: PropTypes.number,
  addToCart: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageLink: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    numberOfPages: PropTypes.number.isRequired,
  }).isRequired,
};

export default LibraryItemCard;
