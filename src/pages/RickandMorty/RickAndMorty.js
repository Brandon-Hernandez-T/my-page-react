import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
/** COMPONENTES INTERNOS */
import NavbarComponent from '../../Components/NavBar/NavbarComponent';

const RickAndMorty = (props) => {

    const [esAlerta, setEsAlerta] = useState(false);


    return (
        <div>
            <NavbarComponent
            props={props}
            />

            <div style={{ position: 'absolute' }} >
                <Alert variant='danger' show={esAlerta} dismissible={true} onClose={() => setEsAlerta(false) } >
                    Usuario y/o contraseña incorrectos
                </Alert>
            </div>
        </div>
    )
};

export default RickAndMorty;