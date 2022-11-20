import "./Home.css";
import backgroundImage from "../assets/WineBG.png";
import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import RateStar from "../Components/RateStar/RateStar";


function Home() {
  // const [Form, setForm] = useState({
  //   name: "",
  //   winery: "",
  //   country: "",
  //   region: "",
  //   evaluation: [],
  //   price: 0,
  //   image: "",
  // });

  const [wines, setWines] = useState([]);

  const apiURL = "https://ironrest.cyclic.app/winedb";

  //estabelece conexão com a API
  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setWines(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(wines);

  let qtdWines = 5;
  console.log(qtdWines);
  let random = [];
  function rand() {
    random.splice(0, qtdWines);
    console.log(random);
    for (let i = 0; i < 3; i++) {
      let numberRandon = Math.random();
      //console.log(numberRandon);
      let temp = Math.floor(numberRandon * qtdWines);
      // console.log(temp);
      if (random.indexOf(temp) === -1) {
        random.push(temp);
      } else {
        i--;
      }
    }
    return random;
  }

  // console.log(rand());

  const cardList = [];
  let randomCard = rand();

  for (let i = 0; i < 3; i++) {
    let indiceW = randomCard[i];
    cardList.push(wines[indiceW]);
  }

  console.log(cardList);

  const cardWines = cardList.map((wine) => {
    let soma = wine.evaluation.reduce((soma, current) => (soma + current), 0);
    let mediaRate = soma / (wine.evaluation.length) / 2;
    console.log(mediaRate)
    return (
      <div>
        <Card className="cardItem" key={wine._id} style={{ width: "20rem" }}>
          <Card.Img variant="top" src={wine.image} style={{ height: "18rem", width: "auto"}} />
          <Card.Body>
            <Card.Title>{wine.name}</Card.Title>
            <Card.Subtitle>{wine.winery}</Card.Subtitle>
            <Card.Text>
            <br></br>
              <b>{wine.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</b>
            </Card.Text>
            <RateStar evaluation={mediaRate} />
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div className="Homepage">
      <figure>
        <img className="BGImage" src={backgroundImage} alt="background" />
      </figure>
      <Container className="Cards">{cardWines}</Container>
    </div>
  );
}

export default Home;
