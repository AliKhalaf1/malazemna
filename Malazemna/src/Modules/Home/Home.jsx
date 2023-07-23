import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Home.scss";
import { useNavigate, Link } from "react-router-dom";
import db from "../../../db.json";
import HomeItemCard from "./components/HomeItemCard";
const Home = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/library/" + id);
  };
  console.log(db);
  return (
    <div className="p-3 m-4">
      <Row>
        {db.map((library) => (
          <Link to={`library/${library.id}`}>
            <HomeItemCard
              id={library.id}
              item={library}
              onClick={handleClick(library.id)}
            />
          </Link>
        ))}
      </Row>
    </div>
  );
};

export default Home;
