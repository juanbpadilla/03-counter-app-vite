

export const getImagen = async () => {

    try {

        const apiKey = 'tNR73FdRFrXJJ5HkR2cngTIaP4YSRos1';

        // ⚠️ ponemos un api key incorrecto para que falle
        // const apiKey = 'tNR73FdRFrXJJ5HkR2cngT';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;

    // eslint-disable-next-line no-unused-vars
    } catch ( error ) {
        // manejo del error
        // console.error( error )
        return 'No se encontró la imagen';
    }



}

getImagen();



