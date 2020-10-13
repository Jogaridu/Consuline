import React from 'react';

import teste from "../../Assets/add.png";
import maisOpcoes from "../../Assets/3pontos.png"
import './styles.css';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function CardListagem(props) {

    const { id, nome, cidade, estado, telefones } = props;

    const telefone = telefones[Math.floor(Math.random() * telefones.length)].numero

    const ddd = telefone.slice(0, 2);
    const telefoneParte1 = telefone.slice(2, 7);
    const telefoneParte2 = telefone.slice(7, 11);

    const [mostrarSubMenu, setMostrarSubMenu] = useState(false);

    const SubMenu = () => {
        return (
            <ul className="sub-menu">
                <li>Editar</li>
                <li>Ativar/Desativar</li>
                <li>Consulta completa</li>
            </ul>
        )
    }

    return (
        <div className="card-listagem" id={id}>
            <figure className="imagem-card-listagem">
                <img src={teste} alt="" />
            </figure>
            <div className="titulo-card-listagem">{nome || "Sem nome"}</div>
            <div className="local-card-listagem">{`${cidade || "Cidade"}/${estado || "Estado"}`}</div>
            <div className="telefone-card-listagem">{`(${ddd}) ${telefoneParte1}-${telefoneParte2}` || "Telefone principal"}</div>
            <div
                className="mais-opcoes"
                onClick={() => {
                    setMostrarSubMenu(!mostrarSubMenu);
                    setTimeout(() => {
                        setMostrarSubMenu(false);
                    }, 10000);
                }}>
                ...
            </div>
            {mostrarSubMenu && (<SubMenu />)}

        </div>
    );
}

export default CardListagem;