import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Home.scss";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      const mockRestaurants = [
        {
          id: 1,
          name: "Restaurant 1",
          description: "Restaurant 1 description",
        },
        {
          id: 2,
          name: "Restaurant 2",
          description: "Restaurant 2 description",
        },
        {
          id: 3,
          name: "Restaurant 3",
          description: "Restaurant 3 description",
        },
        {
          id: 4,
          name: "Restaurant 4",
          description: "Restaurant 4 description",
        },
        {
          id: 5,
          name: "Restaurant 5",
          description: "Restaurant 5 description",
        },
      ];
      setRestaurants(mockRestaurants);
    }, 1000);
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {restaurants.map((restaurant) => (
            <Col key={restaurant.id} xs={12} md={6} lg={4}>
              <Card
                className="mb-3"
                style={{ backgroundColor: restaurant.color }}
              >
                <Card.Img
                  variant="top"
                  src={restaurant.image}
                  alt={restaurant.name}
                />
                <Card.Body>
                  <Card.Title>{restaurant.name}</Card.Title>
                  <Card.Text>{restaurant.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
