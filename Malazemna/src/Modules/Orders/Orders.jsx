import React, { useEffect, useState } from "react";
import OrderCard from "./components/OrderCard";
import orders from "../../../../orders.json";
const Orders = () => {
  return (
    <>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </>
  );
};

export default Orders;
