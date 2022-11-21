import "./Home.css";
import RandomWine from "../../Components/RandonWine/RandonWine";

function Home({ apiURL }) {


  return (
    <div className="Homepage">
      <RandomWine apiURL={apiURL}/>
    </div>
  );
}

export default Home;
