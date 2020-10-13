import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home/index";
import Login from "./Pages/Login/index";
import HomeCrud from "./Pages/Home-Crud/index";
import AdicionarDadosPessoaisFilial from "./Pages/Filial/Adicionar-Informacoes-Filial/index"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <HomeCrud />
        </Route>
        <Route path="/add-info-pessoais">
          <AdicionarDadosPessoaisFilial/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;