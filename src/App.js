import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/Card";
import { Container } from "./components/card/Card.style";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const cardList = data.map((user) => {
    return <Card id={user.id} name={user.name} email={user.email}></Card>;
  });

  const [robot, setRobot] = useState("");

  return (
    <div>
      <h1 className="title">ROBOFRIENDS</h1>
      <input
        className="input-name"
        type="search"
        placeholder="search robots"
      ></input>
      <div className="styles"> {cardList} </div>
    </div>
  );
}

export default App;
