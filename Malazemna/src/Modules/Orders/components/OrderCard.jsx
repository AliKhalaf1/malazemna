import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";
import { IoIosRefresh } from "react-icons/io";
import "./OrderCard.scss";
import { Card, Button } from "react-bootstrap";
const OrderCard = ({ order }) => {
  console.log(order);
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={order.imageLink} />
          <div>
            <Card.Title>{order.library_name}</Card.Title>
            <Card.Subtitle
              className={
                `status my-1 ` +
                (order.status === "Pending"
                  ? "text-warning"
                  : order.status === "Successful"
                  ? "text-success"
                  : "text-danger")
              }
            >
              {order.status}
            </Card.Subtitle>
            <Card.Text className="mt-1 date">{order.order_date}</Card.Text>
            <Card.Text className="mt-1 id">
              {"Order ID: "}
              {order.id}
            </Card.Text>
          </div>
        </Card.Body>
        <Card.Footer>
          <span>EGP {order.totalPrice}</span>
          <Button variant="outline-primary">
            <div className="button-icon">
              <IoIosRefresh size={14} />
              <span> {"Re-order"}</span>
            </div>
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    library_name: PropTypes.string.isRequired,
    order_date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    status: PropTypes.oneOf(["Pending", "Successful", "Cancelled"]),
    imageLink: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderCard;
