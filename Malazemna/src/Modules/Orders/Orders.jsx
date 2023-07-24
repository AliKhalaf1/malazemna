import React, { useEffect, useState } from "react";
import OrderCard from "./components/OrderCard";
import orders from "../../../../orders.json";
const Orders = () => {
  console.log(orders);
  useEffect(() => {
    // Load user orders from DB
  }, []);

  return (
    <>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </>
  );
};

export default Orders;
