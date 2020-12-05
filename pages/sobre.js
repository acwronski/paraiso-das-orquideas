import React from 'react';
import { Spinner } from 'reactstrap';

import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sobre() {
    return (
        <div>
            <Menu />
            Sobre o Paraiso das Orquideas
            <Spinner color="dark" />
            <Spinner color="warning" />
            <div>
                Phalaenopsis
                Gênero de orquídeas asiáticas, as Phalaenopsis também são conhecidas como “orquídeas-borboletas”, pela semelhança das flores com asas de borboleta. Esse tipo de planta prefere sombra, calor e pouca água. Elas podem florir até três vezes por ano e suas flores duram até três meses. As cores dessa flor variam: branca, rosa, azul, roxa, e há também versões híbridas: branca com rosa, azul com branco, amarelo e rosa. As orquídeas brancas são as mais comuns, enquanto a orquídea amarela é rara, sendo mais difícil de encontrar.
            </div>



        </div>
    );
}
export default Sobre