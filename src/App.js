import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import WineDetails from "./Components/WineDetails/WineDetails";
import WineAdd from "./Components/WineAdd/WineAdd";
import WineEdit from "./Components/WineEdit/WineEdit";
import WineList from "./Components/WineList/WineList";
import Preload from "./Components/Preload/Preload";
import RandonWine from "./Components/RandonWine/RandonWine";
import AdegaVirtual from "./Pages/AdegaVirtual/AdegaVirtual";


function App() {

  const apiURL = "https://ironrest.cyclic.app/winedb";
  
  return (
    <div className="App">
    
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home apiURL={apiURL}/>} />
        <Route path="/pre" element={<Preload />} />
        <Route path="/randon" element={<RandonWine apiURL={apiURL}/>} />
        <Route path="/winedetails/:id" element={<WineDetails />} />
        {/* <Route path="/homepage" element={<Home />} /> */}
        <Route path="/wineadd" element={<WineAdd />} />
        <Route path="/wineedit" element={<WineEdit />} />
        <Route path="/list" element={<AdegaVirtual />} />
      </Routes>
    </div>
  );
}

export default App;
