import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
/** COMPONENTES INTERNOS */
import NavbarComponent from '../../Components/NavBar/NavbarComponent';
/** COMPONENTES EXTERNOS */
import FlatList from 'flatlist-react';
import { Container, Card, Pagination } from 'react-bootstrap';
/** UTILS */
import { peticionGenerica } from '../../utils/Api';
/** ESTILOS */
import './RickAndMorty.css';

const RickAndMorty = (props) => {

    const [esAlerta, setEsAlerta] = useState(false);
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
            setPage(pagina);
            let obtenido = await peticionGenerica(URL_PERSONAJES_API + pagina, 'GET', false, {}, false, {});
            console.log('obtenido:: ', obtenido.data.results[0]);
            setListaPersonajes(obtenido.data.results);
        } catch (error) {
            console.log('error-obtenerDatos:: ', error);
        }
    }

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
                        <Pagination.Item key={page - 1} active={page - 1 === page}  disabled={ page-1 === 0 } onClick={() => cambiarPagina(page-1) }>
                            {page - 1}
                        </Pagination.Item>
                        <Pagination.Item key={page} active={page === page}>
                            {page}
                        </Pagination.Item>
                        <Pagination.Item key={page + 1} active={page + 1 === page} disabled={page+1 === paginaMaxima} onClick={() => cambiarPagina(page+1)} >
                            {page + 1}
                        </Pagination.Item>
                        <Pagination.Item key={page + 1} active={page + 2 === page} disabled={page+2 === paginaMaxima} onClick={() => cambiarPagina(page+2)} >
                            {page + 2}
                        </Pagination.Item>
                        <Pagination.Item key={page + 3} active={page + 3 === page} disabled={page+3 === paginaMaxima} onClick={() => cambiarPagina(page+3)} >
                            {page + 3}
                        </Pagination.Item>
                    </Pagination>
                </div>
            </Container>

            <div style={{ position: 'absolute' }} >
                <Alert variant='danger' show={esAlerta} dismissible={true} onClose={() => setEsAlerta(false)} >
                    Usuario y/o contraseña incorrectos
                </Alert>
            </div>
        </div>
    )
};

export default RickAndMorty;