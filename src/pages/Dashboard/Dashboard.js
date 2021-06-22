import React from 'react';
/** COMPONENTES EXTERNOS */
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
/** COMPONENTES INTERNOS */
import NavbarComponent from '../../Components/NavBar/NavbarComponent';
import balam from '../../media/img/balam_logo.jpeg';
/** ESTILOS  */
import './Dashboard.css'

const Dashboard = (props) => {

    const URL_FOTO_PERFIL = "https://scontent-qro1-2.xx.fbcdn.net/v/t31.18172-8/18422795_10206915664410422_188550584942470743_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeEonDjjuOQa52x3mbzK4Bf2026p8FEau_nTbqnwURq7-fYtK3N0Jul7xlhKKFt4ukQ&_nc_ohc=4vzhXGpHr9gAX91kqCm&tn=gFe8b9GASsTevvXo&_nc_ht=scontent-qro1-2.xx&oh=34dc724520fc4628b6ab2ed648f0dfa3&oe=60F53BF4"
    const URL_FOTO_HABIL = "data:image/png;base64,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"
    const URL_FOTO_BALAM = ""

    return (
        <div>
            <NavbarComponent
            props={props}
            />

            <div className="contenedor" >
                <div className="banner-bienvenida" >
                    <div style={{ flexDirection: 'column' }} >
                        <h1> Bienvenidos </h1>
                        <p> Soy un desarrollador con experiencia en React Native y ReactJS, siendo un Front-End developer. </p>
                        <div className="contenedor-redes" >
                            <a href='https://www.linkedin.com/in/brandon-torres-b7199720a/' > <FontAwesomeIcon icon={faLinkedin} size='2x' className="iconos" /> </a>
                            <a href='https://www.instagram.com/torresbran/?hl=es-la' > <FontAwesomeIcon icon={faInstagram} size='2x' className="iconos" /> </a>
                            <a href='https://www.facebook.com/bran.torres.5/'> <FontAwesomeIcon icon={faFacebook} size='2x' className="iconos" /> </a>
                            <a href='https://github.com/Brandon-Hernandez-T' > <FontAwesomeIcon icon={faGithub} size='2x' className="iconos" /> </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contenedor-about" >
                <Container>
                    <Row>
                        <Col>
                            <img src={URL_FOTO_PERFIL} title="Foto de perfil de Brandon Hernandez Torres" width="280" height="auto" className="disenio-imagen" />
                        </Col>
                        <Col>
                            <div className="contenedor-about-descripcion" >
                                <h1> Brandon Hernandez Torres </h1>
                                <p>
                                    Programador <strong>Front-End</strong> con experiencia de más de 2 años desarrollando aplicaciones moviles con <strong>React Native </strong>
                                    en diferentes sectores, por ejemplo, financieros, bancarios, control de personal, etc. Con experiencia en la publicación en tiendas
                                    <strong> Play Store y App Store</strong>. <br /><br />
                                    Desempeñando labores en las siguientes empresas:
                                </p>
                            </div>
                            <Row>
                                <Col className="centrado" >
                                    <h3> Hàbil </h3>
                                    <img src={URL_FOTO_HABIL} title="Foto de HabilMx" width="150" height="auto" />
                                </Col>
                                <Col className="centrado" >
                                    <h3> Balam </h3>
                                    <img src={balam} title="Foto de Balam" width="175" height="auto" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};

export default Dashboard;