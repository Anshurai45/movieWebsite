
import Header from "./components/Header";
import Cards from "./components/Cards";
import AddMovie from "./components/AddMovie";
import Details from "./components/Details";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App relative">
     <Header />
     <Routes>
      <Route path="/" element={<Cards/>} />
      <Route path="/addmovie" element={<AddMovie/>} />
      <Route path="/details/:id" element={<Details/>} />
     </Routes>

    </div>
  );
}

export default App;
