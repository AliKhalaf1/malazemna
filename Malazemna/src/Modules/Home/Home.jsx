import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import db from "../../../db.json";
import HomeItemCard from "./components/HomeItemCard";
const Home = () => {
  const [libraries, setLibraries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setLibraries(mocklibraries);
    }, 1000);
  }, []);
  const handleClick = (id) => {
    navigate("/library/" + id);
  };
  console.log(db);
  return (
    <div className="p-3 m-4">
      <Row>
        {db.map((library) => (
          <HomeItemCard id={library.id} item={library} />
        ))}
      </Row>
    </div>
  );
};

export default Home;
