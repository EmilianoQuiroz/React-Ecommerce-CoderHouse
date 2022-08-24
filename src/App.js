import React from "react";
import { Header } from "./componentes/Header";
import { ProductoLista } from "./componentes/Productos";
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductoLista/>
    </div>
  );
}

export default App;
