const API_KEY = "e02bb07d813f5255844c6d19ab9395ab";
// NOTE - declaración de los url
const baseURL = "https://api.themoviedb.org/3/";
const imageURL = "https://image.tmdb.org/t/p/w300";
const recommImageURL = "https://image.tmdb.org/t/p/w185";

// NOTE - seleccionando contenedor en el html
const conteinerMovi = document.getElementById("conteienerMovi");
const conteinerTV = document.getElementById("conteienerTV");

let i = 2;
let tv_id = 2;
// NOTE - obteniendo las peliculas ejemplo
function cargarMasMovi() {
    i++;
    CargarMovi(i);
}
function CargarMovi(i) {
    fetch(`${baseURL}movie/${i}?api_key=${API_KEY}&language=es-ES`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            conteinerMovi.innerHTML = `
            <div class="conteianr">
                <h1>Titulo: ${data.original_title}</h1>
                <p>Detalle: ${data.overview}</p>
                <p>Puntuaciòn: ${data.popularity}</p>
                <img src="${imageURL + data.poster_path}" alt="poster_img_${
                data.original_title
            }">
            </div>`;
        });
}
// NOTE - Funcion para cambiar de tv
function cargarMasTV() {
    tv_id++;
    CargarTV(tv_id);
}
// NOTE - funcion para cargar tv
function CargarTV(i) {
    fetch(`${baseURL}tv/${i}?api_key=${API_KEY}&language=es-ES`)
        .then((response) => response.json())
        .then((datatv) => {
            console.log(datatv);
            conteinerTV.innerHTML = `
                        <div class="conteianr">
                            <h1>Titulo: ${datatv.original_name}</h1>
                            <p>Ultimo episodio: ${datatv.last_air_date}</p>
                            <p>Puntuaciòn: ${datatv.popularity}</p>
                            <p>Lenguaje original: ${
                                datatv.original_language
                            }</p>
                            <p>Genoro: ${datatv.genres[0].name}</p>
                            <img src="${
                                imageURL + datatv.poster_path
                            }" alt="poster_img_${datatv.original_name}">
                        </div>`;
        });
}
