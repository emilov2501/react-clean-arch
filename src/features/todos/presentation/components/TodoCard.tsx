import React from "react";
import Card from "react-bootstrap/Card";

type TTodoCard = {
  title: string;
};

export const TodoCard: React.FC<Required<TTodoCard>> = ({ title }) => {
  return (
    <Card>
      <Card.Body>{title}</Card.Body>
    </Card>
  );
};
