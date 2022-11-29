import React from "react";
import Card from "react-bootstrap/Card";

const Character = (props) => {
  return (
    <Card style={{ width: "320px", padding: "20px" }}>
      <Card.Img
        variant="top"
        width="100%"
        height="400px"
        style={{ objectFit: "cover", borderRadius: 100 / 25 }}
        src={props.image}
      />
      <Card.Body style={{ flex: "display", justifyContent: "center" }}>
        <Card.Title style={{ color: "white" }}>{props.fullName}</Card.Title>
        <Card.Text style={{ color: "white" }}>{props.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Character;
