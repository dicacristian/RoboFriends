import React from "react";
import { Container } from "./Card.style";

const Card = ({ id, name, email }) => {
  return (
    <Container>
      <img src={`https://robohash.org/${id}size=180x180`}></img>
      <h2 className = "names"> {name}</h2>
      <p className="email">{email}</p>
    </Container>
  );
};

export default Card;
