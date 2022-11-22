import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import WineDetails from "./Components/WineDetails/WineDetails";
import WineAdd from "./Components/WineAdd/WineAdd";
// import WineEdit from "./Components/WineEdit/WineEdit";
import Preload from "./Components/Preload/Preload";
import RandonWine from "./Components/RandonWine/RandonWine";
import AdegaVirtual from "./Pages/AdegaVirtual/AdegaVirtual";
import AboutModal from "./Components/About/About"
import { useState } from "react";



function App() {

  const apiURL = "https://ironrest.cyclic.app/winedb";

  const [form, setForm] = useState({
    name: "",
    winery: "",
    country: "",
    region: "",
    evaluation: [],
    price: "",
    image: "",
  })
  
  return (
    <div className="App">
    
      <NavigationBar className="NavigationBar"/>
      <Routes>
        <Route path="/" element={<Home apiURL={apiURL}/>} />
        <Route path="/pre" element={<Preload />} />
        <Route path="/randon" element={<RandonWine apiURL={apiURL}/>} />
        <Route path="/winedetails/:id" element={<WineDetails apiURL={apiURL} form={form} setForm={setForm} />} />
        {/* <Route path="/homepage" element={<Home />} /> */}
        <Route path="/wineadd" element={<WineAdd apiURL={apiURL} form={form} setForm={setForm} />} />
        {/* <Route path="/wineedit" element={<WineEdit apiURL={apiURL}/>} /> */}
        <Route path="/list" element={<AdegaVirtual apiURL={apiURL}/>} />
        <Route path="/about" element={<AboutModal />} />
      </Routes>
    </div>
  );
}

export default App;
