import "./Home.css";
import backgroundImage from "../assets/WineBG.png";
import rolhas from "../assets/Rolhas(1153 × 649 px).png";
import { Button, Card, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <div className="Homepage">
      <figure>
        <img className="BGImage" src={backgroundImage} alt="background" />
      </figure>
      <Container className="Cards">
        <Row  xs={1} md={4}>
        <Col xs={6} md={4}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={rolhas} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={6} md={4}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={rolhas} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={6} md={4}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={rolhas} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
