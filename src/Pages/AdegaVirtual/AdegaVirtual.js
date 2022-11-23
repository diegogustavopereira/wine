import "./AdegaVirtual.css";
import { Card, Container, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import searchIcon from "../../assets/search.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import RateStar from "../../Components/RateStar/RateStar";
import Preload from "../../Components/Preload/Preload";
import { useForm } from "rc-field-form";

function AdegaVirtual({ apiURL }) {
  const [winesList, setWinesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

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
      <Form className="SearchInput">
        <img className="SerchInputImg" src={searchIcon} alt="" />

        <Form.Control
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
      </Form>
    );
  }



  const WineGrid = winesList
    .filter((wine) => wine.name.toLowerCase().includes(search.toLowerCase()) || wine.winery.toLowerCase().includes(search.toLowerCase()))

    .map((wine) => {
      return (
        <Card
          key={wine._id}
          className="cardItem"
          style={{ width: "20rem", WebkitMaskAttachment: "fixed" }}
        >
          <a href={`/winedetails/${wine._id}`} class="stretched-link"></a>
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
                {Number(wine.price).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </b>
            </Card.Text>
            <RateStar
              evaluation={
                wine.evaluation.reduce((soma, current) => soma + current, 0) /
                wine.evaluation.length
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
