import { Button, Card } from 'react-bootstrap';

const MenuItem = (props) => {
  return (
    <Card className="mb-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Rp{props.price.toLocaleString('id')}</Card.Text>
        <div className="d-grid gap-2">
          <Button variant="primary" size="sm">
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default MenuItem;
