import axios from "axios";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

function WineAdd({ apiURL, form, setForm }) {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post(apiURL, form);
      
      navigate(`/list`);

      toast.success('Novo vinho cadastrado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <Container>
      <Card style={{ padding: "10px", margin: "15px" }}>
        <h2>Cadastrar Novo Vinho</h2>
        <Form onSubmit={handleSubmit}>
          <Row style={{ margin: "15px" }}>
            <Col>
              <Form.Group>
                <Form.Label>Nome do Vinho</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o nome do vinho"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Vinícola</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o nome da vinícola"
                  name="winery"
                  value={form.winery}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row style={{ margin: "15px" }}>
            <Col>
              <Form.Group>
                <Form.Label>País de Origem</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o nome do país de origem"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Região</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o nome da região"
                  name="region"
                  value={form.region}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row style={{ margin: "15px" }}>
            <Col>
              <Form.Group>
                <Form.Label>Preço Sugerido</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Insira o preço sugerido"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Label>Avaliação</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insira a nota deste vinho"
                name="evaluation"
                value={form.evaluation}
                onChange={handleChange}
                max="5"
                min="0"
                step="0.5"
              />
            </Col>
          </Row>
          <Row style={{ margin: "15px" }}>
            <Form.Group>
              <Form.Label>Harmonização</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o(s) alimento(s) que harmoniza(m) com este vinho"
                name="pairing"
                value={form.pairing}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row style={{ margin: "15px" }}>
            <Form.Group>
              <Form.Label>URL da Imagem</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o endereço da imagem"
                name="image"
                value={form.image}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Button
            variant="success"
            type="submit"
            style={{ padding: "10px", margin: "15px" }}
          >
            Cadastrar Novo Vinho
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default WineAdd;
