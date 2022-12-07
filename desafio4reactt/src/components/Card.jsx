import Card from "react-bootstrap/Card";

function Cards({ image, name, status,}) {
  return (
    <Card className="bg-secondary  m-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="fs-2  text-bold tituloCard">{name}</Card.Title>
        <Card.Text className="text-light">Status: {status} </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;