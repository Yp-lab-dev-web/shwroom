import { Routes, Route } from 'react-router-dom';
import Accueil from './acceille/acceille'; 
import Catalogue from './catalogue/catalogue'; 
import Inscription from './inscription/inscription';
import Conexion from './conexion/conexion'
import  About from './about/about'
function App() {
  return (
  <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/catalogue" element={<Catalogue />} />
     <Route path="/" element={<Accueil />} />
      <Route path="/inscription" element={ <Inscription />} />
      <Route path="/conexion" element={ < Conexion/>} />
      <Route path="/about" element={<About />} />
  
 </Routes>
  );
}

export default App;