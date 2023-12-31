import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";
import "./HomeItemCard.scss";
import { Card } from "react-bootstrap";
const HomeItemCard = ({ item }) => {
  console.log(item);
  return (
    <div className="home">
      <Card>
        <Card.Img variant="top" src={item.imageLink} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <div className="raitngs" style={{ display: "flex" }}>
            <Rating
              name="read-only"
              value={item.Rating}
              precision={0.5}
              readOnly
              size="small"
            />
            <h1 className="ml-1 rating">({item.number_of_ratings})</h1>
          </div>
          <Card.Text className="location my-1">
            -{item.location} (<b>{item.distance_from_you}km away</b>){" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

HomeItemCard.propTypes = {
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

export default HomeItemCard;
