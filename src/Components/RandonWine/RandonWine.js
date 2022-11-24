import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Preload from "../Preload/Preload";
import RateStar from "../RateStar/RateStar";
import WineDetails from "../WineDetails/WineDetails";


function Randon(qtdWines) {
  let randon = [];
  randon.splice(0, qtdWines);
  for (let i = 0; i < 3; i++) {
    let numberRandon = Math.random();
    let temp = Math.floor(numberRandon * qtdWines);
    if (randon.indexOf(temp) === -1) {
      randon.push(temp);
    } else {
      i--;
    }
  }
  return randon;
}

function RandomWine({ apiURL }) {
  const [isLoading, setIsLoading] = useState(true);
  const [wines, setWines] = useState([]);

  let randonCard = [];
  let cardList = [];

  //conecta com a API
  useEffect(() => {
    try {
      const fetchWines = async () => {
        const response = await axios.get(apiURL);
        let qtd = response.data.length;
        randonCard = Randon(qtd);

        setWines(response.data);

        for (let i = 0; i < 3; i++) {
          let indiceW = randonCard[i];
          cardList.push(response.data[indiceW]);
          console.log(cardList);
        }

        setWines(cardList);

        //finaliza loading
        setIsLoading(false);
      };

      fetchWines();
    } catch (error) {
      console.log(error);
    }
  }, [apiURL]);

  console.log(wines);

  const cardWines = wines.map((wine) => {
    return (
      <Card key={wine._id} className="cardItem" style={{ width: "20rem" }} >
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
            style={{height: "1.5rem", width: "auto", padding:"4px"}}
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
            evaluation={Number(wine.evaluation)}/>
        </Card.Body>
      </Card>
    );
  });

  return (
    <Container>
      {isLoading && <Preload />}
      {!isLoading && <div className="Cards">{cardWines}</div>}
    </Container>
  );
}

export default RandomWine;
