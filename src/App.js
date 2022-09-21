import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { NavbarApp } from './components/Navbar';
import { Personajes } from './components/Personajes/Personajes';
import { Detalles } from './components/Detalles/Detalles';
function App() {
  return (
    <div className="App">
      <NavbarApp/>
      <Routes>
        <Route path='/' element={<Personajes/>} />
        <Route path='/detalles/:id' element={<Detalles/>} />
      </Routes>
    </div>
  );
}

export default App;
