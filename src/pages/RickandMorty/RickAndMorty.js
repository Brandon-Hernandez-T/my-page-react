import React, { useState, useEffect } from 'react';
/** COMPONENTES INTERNOS */
import NavbarComponent from '../../Components/NavBar/NavbarComponent';
/** COMPONENTES EXTERNOS */
import FlatList from 'flatlist-react';
import { Container, Card, Button, Toast, Form, Pagination } from 'react-bootstrap';
/** UTILS */
import { peticionGenerica } from '../../utils/Api';
/** ESTILOS */
import './RickAndMorty.css';

const RickAndMorty = (props) => {

    const [esAlerta, setEsAlerta] = useState(false);
    const [mensajeAlerta, setMensajeAlerta] = useState('');
    const [listaPersonajes, setListaPersonajes] = useState([]);
    const [page, setPage] = useState(1);
    const [paginaMaxima, setPaginaMaxima] = useState(100);
    const URL_PERSONAJES_API = "https://rickandmortyapi.com/api/character?page=";

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        try {
            let obtenido = await peticionGenerica(URL_PERSONAJES_API + page, 'GET', false, {}, false, {});
            console.log('obtenido:: ', obtenido.data.results[0]);
            setListaPersonajes(obtenido.data.results);
            setPaginaMaxima(obtenido.data.info.pages);
        } catch (error) {
            console.log('error-obtenerDatos:: ', error);
        }
    };

    const cambiarPagina = async (pagina) => {
        try {
            setEsAlerta(true);
            setMensajeAlerta(`Se cargo la página ${pagina}`);
            setPage(pagina);
            let obtenido = await peticionGenerica(URL_PERSONAJES_API + pagina, 'GET', false, {}, false, {});
            console.log('obtenido:: ', obtenido.data.results[0]);
            setListaPersonajes(obtenido.data.results);
        } catch (error) {
            console.log('error-obtenerDatos:: ', error);
        };
    };

    const renderPersonaje = (item) => (
        <Card border="info" >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title> {item.name} </Card.Title>
                <span> {item.species} </span>
                <p style={{ color: 'black' }} > Status: {item.status} </p>
                <p style={{ color: 'black' }}> Ultima ubicación: </p>
                <p style={{ color: 'black' }} > {item.location.name} </p>
            </Card.Body>
        </Card>
    );

    return (
        <div>
            <NavbarComponent
                props={props}
            />
            <Container>
                <div className="contenedor-cards" >
                    <FlatList
                        list={listaPersonajes}
                        renderItem={renderPersonaje}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                        displayGrid
                    />
                </div>

                <div className="contenedor-paginacion" >
                    <Pagination>
                        <Pagination.Prev onClick={() => cambiarPagina(page - 1)} disabled={page === 1} />
                        <Pagination.Item active>{page}</Pagination.Item>
                        <Pagination.Next onClick={() => cambiarPagina(page + 1)} disabled={page === paginaMaxima} />
                    </Pagination>
                </div>
            </Container>

            {/* <div style={{ position: 'relative'}} >
                <Alert variant='success' show={esAlerta} dismissible={true} onClose={() => setEsAlerta(false)} >
                    {mensajeAlerta}
                </Alert>
            </div> */}
            <Toast show={esAlerta} onClose={() => setEsAlerta(false)} delay={2000} autohide >
                <Toast.Header>
                    Carga exitosa!
                </Toast.Header>
                <Toast.Body>{mensajeAlerta}</Toast.Body>
            </Toast>
        </div>
    )
};

export default RickAndMorty;