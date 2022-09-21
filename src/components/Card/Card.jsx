import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


export const CardApp = ({imageSrc, title, url}) => {
  return (
    <Card style={{ width: "14rem" }} className="m-5 text-center cardApp shadow">
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>

        </Card.Text>
        <Link className='btn btn-outline-info btnDetalles' to={`/detalles/${url}`} >Detalles</Link>
      </Card.Body>
    </Card>
  );
}