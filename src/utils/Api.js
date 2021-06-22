import axios from 'axios';

export const peticionGenerica = (url, metodo, esBody, body, esHeader, header) => {
    return new Promise((resolve, reject) => {
        console.log("inicio-peticionGenerica-ServicioGenerico");
        console.log('URL:: ', url);
        console.log('Metodo:: ', metodo);
        console.log('esBody:: ', esBody);
        console.log('Body:: ', body);
        console.log('esHeader:: ', esHeader);
        console.log('Header:: ', header);

        axios({
            method: metodo,
            url: url,
            headers: esHeader ? header
                :
                {
                    "content-type": "application/json",
                },
            data: esBody ? body : {}
        })
            .then((responsePeticion) => {
                resolve(responsePeticion);
                console.log("fin-peticionGenerica-ServicioGenerico");
            })
            .catch(function (error) {
                console.log('error-peticionGenerica:: ', error);
                reject(error);
                console.log("fin-peticionGenerica-ServicioGenerico");
            });
    });
};