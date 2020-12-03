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



        </div>
    );
}
export default Sobre