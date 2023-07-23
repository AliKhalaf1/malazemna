import React, { useEffect, useState } from "react";
import OrderCard from "./components/OrderCard";
const Orders = () => {
  const [orders, setOrders] = useState([
    {
      library_name: "Speed",
      id: 1,
      status: "Cancelled",
      order_date: "23 May 2023 12:03",
      imageLink: "https://via.placeholder.com/50",
    },
    {
      library_name: "El Khawaga",
      id: 1,
      status: "Pending",
      order_date: "22 May 2023 9:49",
      imageLink: "https://via.placeholder.com/50",
    },
    {
      library_name: "Resala",
      id: 3,
      status: "Successful",
      order_date: "21 May 2023 18:43",
      imageLink: "https://via.placeholder.com/50",
    },
  ]);
  useEffect(() => {
    // Load user orders from DB
  });

  return (
    <>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </>
  );
};

export default Orders;
