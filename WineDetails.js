import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import WineEdit from '../WineEdit/WineEdit';

function WineDetails({apiURL}){

    const [wine, setWine] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        try{
            const fetchWine = async () => {
                const response = await axios.get(`${apiURL}/${id}`)
                setWine(response.data)
            }

            fetchWine()
        } catch (error) {
            console.log(error)
        }
    }, [apiURL, id])

    const deleteWine = async (id) => {
        await axios.delete(`${apiURL}/${id}`)
        navigate("/list")
    }

    return(
        <Container>
            <Card>
                <Card.Header>
                    <Card.Title>{wine.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table>
                        <Row>
                            <Col>
                                <img src={wine.image} alt="foto da garrafa do vinho" />
                            </Col>                            
                            <Col>
                                <Card.Title>Informações do Vinho</Card.Title>
                                <Card.Text>Vinícola: {wine.winery}</Card.Text>
                                <Card.Text>País de Origem: {wine.country}</Card.Text>
                                <Card.Text>Região: {wine.region}</Card.Text>
                                <Card.Text>Avaliação: {wine.evaluation}</Card.Text>
                                <Card.Text>Preço Sugerido: R$ {wine.price}</Card.Text>
                                <Card.Text>Harmoniza com: carne de vaca, cordeiro, aves</Card.Text>
                                <Row>
                                    <Col>
                                        <Button variant="primary" onClick={() => navigate("/list")}>Voltar</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="secondary" onClick={() => WineEdit(wine._id)}>Editar Informações</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button variant="link">Já experimentou? Deixe sua avaliação!</Button>
                                </Row>
                                <Row>
                                    <Button variant="danger" onClick={() => deleteWine(wine._id)} style={{ width: "10rem" }}>Excluir Vinho</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default WineDetails;
