import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function WineEdit({ apiURL, form, setForm, id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWine = async () => {
      const response = await axios.get(`${apiURL}/${id}`);
      setForm(response.data);
    };
    fetchWine();
  }, [apiURL, id, setForm]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const clone = { ...form };
      delete clone._id;

      await axios.put(`${apiURL}/${id}`, clone);

      navigate("/list");

      toast.success("Dados atualizados!", {
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

  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        Editar Informações
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Informações do Vinho</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nome do Vinho</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group style={{ margin: "10px 0 0 0" }}>
              <Form.Label>Vinícola</Form.Label>
              <Form.Control
                type="text"
                name="winery"
                value={form.winery}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group style={{ margin: "10px 0 0 0" }}>
              <Form.Label>País de Origem</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group style={{ margin: "10px 0 0 0" }}>
              <Form.Label>Região</Form.Label>
              <Form.Control
                type="text"
                name="region"
                value={form.region}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group style={{ margin: "10px 0 0 0" }}>
              <Form.Label>Avaliação</Form.Label>
              <Form.Control
                type="number"
                name="evaluation"
                value={form.evaluation}
                onChange={handleChange}
                max="5"
                min="0"
                step="0.5"
              />
            </Form.Group>
            <Form.Group style={{ margin: "10px 0 0 0" }}>
              <Form.Label>Preço Sugerido</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group style={{ margin: "10px 0 0 0" }}>
              <Form.Label>Harmonização</Form.Label>
              <Form.Control
                type="text"
                name="pairing"
                value={form.pairing}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="success" type="submit" style={{ margin: "15px" }}>
              Atualizar Informações
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default WineEdit;
