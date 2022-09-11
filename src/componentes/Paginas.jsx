import React from "react";
import { Switch, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductoLista } from "./Productos";

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" exact component={ProductoLista} />
      </Switch>
    </section>
  );
};
