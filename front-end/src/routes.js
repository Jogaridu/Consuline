import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import HomeCrud from "./Pages/Home-Crud";

import ConsultaFilial from "./Pages/Filial/Consulta";
import RegistrarFilial from "./Pages/Filial/Registrar";
import ListagemFilial from "./Pages/Filial/Listar-Filiais";
import EditarFilial from "./Pages/Filial/Editar/index";

import RegistrarProfissional from "./Pages/Medico/Registrar";
import RegistrarServico from "./Pages/Servicos/index";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home-central">
          <HomeCrud />
        </Route>

        {/* Rota de filiais */}

        <Route path="/filial/editar/:id">
          <EditarFilial />
        </Route>

        <Route path="/filial/:id">
          <ConsultaFilial />
        </Route>

        <Route path="/filial" exact>
          <RegistrarFilial />
        </Route>

        <Route path="/filiais">
          <ListagemFilial />
        </Route>

        {/* Rotas de profissionais */}

        <Route path="/profissional-saude">
          <RegistrarProfissional />
        </Route>

        {/* Rotas de serviços */}
        <Route path="/servicos">
          <RegistrarServico />
        </Route>

      </Switch>
    </BrowserRouter >
  );
}

export default Routes;
