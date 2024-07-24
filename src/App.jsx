import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Filme from "./pages/Filme";
import Error from "./pages/Error";

function App() {
  return (
        <Router>
          <Header/>
          <div>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/sobre" element={<Sobre/>}/>
              <Route path="/filme/:id" element={<Filme/>}></Route>
              <Route path="*" element={<Error/>}></Route>
          </Routes>
          </div>
        </Router>      
  );
}

export default App;
