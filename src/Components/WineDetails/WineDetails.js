import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Preload from "../Preload/Preload";
import WineEdit from "../WineEdit/WineEdit";
import RateStar from "../RateStar/RateStar";
import { toast } from 'react-toastify';

function WineDetails({ apiURL, form, setForm }) {
  const [wine, setWine] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchWine = async () => {
        const response = await axios.get(`${apiURL}/${id}`);
        setWine(response.data);
        setIsLoading(false);
      };

      fetchWine();
    } catch (error) {
      console.log(error);
    }
  }, [apiURL, id]);

  const deleteWine = async (id) => {
    await axios.delete(`${apiURL}/${id}`);
    navigate("/list");
    toast.success('Vinho excluído com sucesso!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
  });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      {isLoading && <Preload />}
      {!isLoading && (
        <Card
          key={wine._id}
          style={{ width: "40rem", padding: "10px", margin: "15px"}}
        >
          <Card.Header>
            <Card.Title>{wine.name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Table>
              <Row>
                <Col>
                  <img
                    src={wine.image}
                    alt="foto da garrafa do vinho"
                    style={{ height: "30rem", width: "auto" }}
                  />
                </Col>
                <Col>
                  <Card.Title>Informações do Vinho</Card.Title>
                  <Card.Img
                    src={`https://countryflagsapi.com/png/${wine.country}`}
                    style={{ height: "1.5rem", width: "auto", padding: "4px" }}
                  />
                  <Card.Text>País de Origem: {wine.country}</Card.Text>
                  <Card.Text>Vinícola: {wine.winery}</Card.Text>
                  <Card.Text>Região: {wine.region}</Card.Text>
                  <Card.Text>
                    Avaliação{" "}
                    <RateStar
                      evaluation={
                        wine.evaluation.reduce(
                          (soma, current) => soma + current,
                          0
                        ) /
                        wine.evaluation.length
                      }
                    />
                  </Card.Text>
                  <Card.Text>
                    Preço Sugerido:{" "}
                    {Number(wine.price).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Card.Text>
                  <Card.Text>
                    Harmoniza com: {wine.pairing}
                  </Card.Text>
                </Col>
                <Row>
                <Row>
                  <Button variant="link">
                    Já experimentou? Deixe sua avaliação!
                  </Button>
                </Row>
                  <Col>
                    <Button variant="primary" onClick={() => navigate("/list")}>
                      Voltar
                    </Button>
                  </Col>
                  <Col>
                    <WineEdit id={ id } apiURL={ apiURL} form={ form } setForm={ setForm } />
                  </Col>
                  <Col>
                    <Button
                        variant="danger"
                        onClick={() => deleteWine(wine._id)}
                    >
                        Excluir Vinho
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Table>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default WineDetails;
