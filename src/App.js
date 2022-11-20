import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import WineDetails from "./Components/WineDetails/WineDetails";
import WineAdd from "./Components/WineAdd/WineAdd";
import WineEdit from "./Components/WineEdit/WineEdit";
import WineList from "./Components/WineList/WineList";


function App() {
  
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/winedetails/:id" element={<WineDetails />} />
        {/* <Route path="/homepage" element={<Home />} /> */}
        <Route path="/wineadd" element={<WineAdd />} />
        <Route path="/wineedit" element={<WineEdit />} />
        <Route path="/list" element={<WineList />} />
      </Routes>
    </div>
  );
}

export default App;
