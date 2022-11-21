import "./AdegaVirtual.css";
import { Card, Container, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import searchIcon from "../../assets/search.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import RateStar from "../../Components/RateStar/RateStar";
import Preload from "../../Components/Preload/Preload";

function AdegaVirtual({ apiURL }) {
  const [winesList, setWinesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchWines = async () => {
        const response = await axios.get(apiURL);
        setWinesList(response.data);

        //finaliza loading
        setIsLoading(false);
      };

      fetchWines();
    } catch (error) {
      console.log(error);
    }
  }, [apiURL]);

  function SearchBar() {
    return (
      <InputGroup
        className="mb-3"
        style={{ width: "30rem", marginLeft: "40rem", paddingTop: "8px" }}
      >
        <InputGroup.Text>
          <img src={searchIcon} alt="" />
        </InputGroup.Text>
        <Form.Control
          placeholder="Pesquisar"
          aria-label="Pesquisar"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    );
  }

  const WineGrid = winesList.map((wine) => {
    return (
      <Card key={wine._id} className="cardItem" style={{ width: "20rem", WebkitMaskAttachment:"fixed" }}>
        <Card.Img
          variant="top"
          src={wine.image}
          style={{ height: "18rem", width: "auto" }}
        />
        <Card.Body>
          <Card.Title>{wine.name}</Card.Title>
          <Card.Subtitle>{wine.winery}</Card.Subtitle>
          <Card.Img
            src={`https://countryflagsapi.com/png/${wine.country}`}
            style={{ height: "1.5rem", width: "auto", padding: "4px" }}
          />
          <Card.Text>
            <b>
              {wine.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </b>
          </Card.Text>
          <RateStar
            evaluation={
              wine.evaluation.reduce((soma, current) => soma + current, 0) /
              wine.evaluation.length /
              2
            }
          />
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="ContainerAdega">
      <Container>
        <SearchBar />
        {isLoading && <Preload />}
        {!isLoading && <div className="CardsList">{WineGrid}</div>}
      </Container>
    </div>
  );
}

export default AdegaVirtual;
