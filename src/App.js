import React from "react";
import { Header } from "./componentes/Header";
import { ProductoLista } from "./componentes/Productos";
import 'boxicons';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {DataProvider} from './context/Dataprovider';
import {Carrito} from './componentes/Carrito';

function App() {
  return (
    
    <div className="App">
      
      <Header/>
      <Carrito/>
      <ProductoLista/>
      
    </div>
    
  );
}

export default App;
