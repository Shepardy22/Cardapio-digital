import MenuCategorias from "./components/pages/MenuCategorias";

import ListaItems from "./components/pages/ListaItems";
import Logo from "./components/Logo";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Container from "./components/layout/Container";
import Produto from "./components/pages/Produto";


function App() {

  return (
    <div className="h-auto w-full flex flex-col ">
      <Router>
        <Logo/>

        <Container>
          <Routes>
            <Route path="/" element={<MenuCategorias/>}/>
            <Route path="/ListaItems/:id" element={<ListaItems/>}/>
            <Route path="/Produto/:id/:it" element={<Produto/>}/>
          </Routes>
        </Container>
        

      </Router>
    </div>
    
  );
}

export default App;
