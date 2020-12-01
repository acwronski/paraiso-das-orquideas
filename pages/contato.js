import React from 'react';
import { Spinner } from 'reactstrap';

import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contato() {
    return (
        <div>
            <Menu />
            Contato
            <Spinner color="success" />


            <div className="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
                <span className="sr-only">Loading...</span>
            </div>



        </div>
    );

}
export default Contato