import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function WineEdit({ id, apiURL, form, setForm }){

    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchWine = async () => {
            const response = await axios.get(`${apiURL}/${id}`)
            setForm(response.data)
        }
        fetchWine()
    }, [apiURL, form, setForm])

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const clone = {... form}
            delete clone._id

            await axios.put(`${apiURL}/${id}`)
            
            navigate("/winedetails/:id")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <Button variant="primary" onClick={handleShow}>
                Editar funcionário
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
                                placeholder="Insira o nome do vinho"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
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
                        <Form.Group>
                            <Form.Label>Avaliação</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insira a avaliação"
                                name="evaluation"
                                value={form.evaluation}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Preço Sugerido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insira o preço sugerido"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {/* <Form.Group>
                            <Form.Label>Harmoniza com</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insira os alimentos que harmonizam com este vinho"
                                name="pairing"
                                value={form.pairing}
                                onChange={handleChange}
                            />
                        </Form.Group> */}
                        <Button variant="success" type="submit">Atualizar Informações</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default WineEdit;