import React from 'react';
import { Spinner } from 'reactstrap';

import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contato() {
    return (
        <div>
            <Menu />
            Contato
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>



        </div>
    );

}
export default Contato