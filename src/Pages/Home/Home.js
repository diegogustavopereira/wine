import "./Home.css";
import backgroundImage from "../../assets/WineBG.png";
import RandomWine from "../../Components/RandonWine/RandonWine";

function Home({ apiURL }) {


  return (
    <div className="Homepage">
      {/* <figure>
        <img className="BGImage" src={backgroundImage} alt="background" />
      </figure> */}
      
      <RandomWine apiURL={apiURL}/>
    </div>
  );
}

export default Home;
