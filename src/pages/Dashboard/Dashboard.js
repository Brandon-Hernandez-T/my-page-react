import React from 'react';
/** COMPONENTES EXTERNOS */
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
/** COMPONENTES INTERNOS */
import NavbarComponent from '../../Components/NavBar/NavbarComponent';
/** ESTILOS  */
import './Dashboard.css'

const Dashboard = (props) => {

    return (
        <div>
            <NavbarComponent />

            <div className="contenedor" >
                <div className="banner-bienvenida" >
                    <div style={{ flexDirection: 'column' }} >
                        <h1> Brandon Hernandez </h1>
                        <p> Soy un desarrollador con experiencia en React Native y ReactJS, siendo un Front-End developer. </p>
                        <div className="contenedor-redes" >
                            <a href='https://www.instagram.com/torresbran/?hl=es-la' > <FontAwesomeIcon icon={faInstagram} size='2x' className="iconos" /> </a>
                            <a href='https://www.facebook.com/bran.torres.5/'> <FontAwesomeIcon icon={faFacebook} size='2x' className="iconos" /> </a>
                            <a href='https://github.com/Brandon-Hernandez-T' > <FontAwesomeIcon icon={faGithubAlt} size='2x' className="iconos" /> </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contenedor-about" >
                <Container>
                    <Row>
                        <Col>
                        <h1> Este es el area 1 </h1> 
                        </Col>
                        <Col>
                        <h1> Este es el area 2</h1> 
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};

export default Dashboard;