import { Data } from '../data/data';
import MenuItem from '../components/MenuItem';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Menu = (props) => {
  return (
    <Container className="p-5">
      <Row>
        {Data.map((menuItem, key) => {
          return (
            <Col xs lg="4">
              <MenuItem
                name={menuItem.name}
                price={menuItem.price}
                image={menuItem.image}
                key={key}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Menu;
