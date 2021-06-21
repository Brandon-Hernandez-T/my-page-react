import React, { useState } from 'react';
import { Button, Alert, Form } from 'react-bootstrap';

const Login = (props) => {

    const [usuario, setUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [esAlerta, setEsAlerta] = useState(false);

    const ingresar = () => {
        console.log('usuario:: ', usuario);
        console.log('contrasenia:: ', contrasenia);

        if (usuario === 'brandon' && contrasenia === '1234') {
            console.log('mandar a ingreso');
            props.history.push('/dashboard', { from: 'Login' });
        } else {
            console.log('Usuario y/o contraseña incorrectos');
            setEsAlerta(true);
        };
    };


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <div style={{ width: '50%', height: '45%', borderStyle: 'solid', borderColor: '#2271b3', marginTop: '10%', display: 'flex', justifyContent: 'center', borderRadius: 20 }} >
                <div style={{ paddingTop: '8%', paddingBottom: '8%', width: '40%' }} >
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Usuario:</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu usuario" onChange={e => setUsuario(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" onChangeCapture={e => setContrasenia(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={() => ingresar()} >
                            Ingresar
                        </Button>
                    </Form>
                </div>
            </div>
            <div style={{ position: 'absolute' }} >
                <Alert variant='danger' show={esAlerta} dismissible={true} onClose={() => setEsAlerta(false) } >
                    Usuario y/o contraseña incorrectos
                </Alert>
            </div>
        </div>
    )
};

export default Login;