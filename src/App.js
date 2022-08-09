
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contac from './pages/Contac';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import CardtProvider from './Context/CardtContex'

function App() {

  return (
    //JSX
    <CardtProvider >
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contacto" element={<Contac />}/>
          <Route path="/productos" element={<h1>Productos</h1>}/>
          <Route path="/productos/:id" element={<Detail />} />
          <Route path='/cart' element={<Checkout />}/>
          <Route path="*" element={<h1>ERROR 404 -  pagina no encontrada</h1>}/>
        </Routes>
    </BrowserRouter>
    </CardtProvider>
  );
}

export default App;