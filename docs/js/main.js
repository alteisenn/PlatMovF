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
function MoreMovi() {
    i++;
    getMovi(i);
}
function getMovi(i) {
    fetch(`${baseURL}movie/${i}?api_key=${API_KEY}&language=es-ES`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            conteinerMovi.innerHTML = `
            <div class="conteianr text-center">
                <h1>Titulo original: ${data.original_title} </h1>
                <img src="${imageURL + data.poster_path}" alt="poster_img_${
                data.original_title
            }">
                <button type="button" class="btn btn-primary m-4 d-block" data-bs-toggle="modal" data-bs-target="#modalMovi">Más detalles</button>
            </div>

                <div class="modal fade" id="modalMovi" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitleId">${
                        data.original_title
                    }</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Detalle: ${data.overview}</p>
                    <p>Puntuaciòn: ${data.popularity}</p>
                </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            `;
        });
}
// NOTE - Funcion para cambiar de tv
function MoreTV() {
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
                        <div class="conteianr text-center">
                            <h1>Titulo: ${datatv.original_name}</h1>
                            <img src="${
                                imageURL + datatv.poster_path
                            }" alt="poster_img_${datatv.original_name}">
                            <button type="button" class="btn btn-primary m-4 d-block" data-bs-toggle="modal" data-bs-target="#modalTV">Más detalles</button>            
                </div>
                <div class="modal fade" id="modalTV" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitleId">${
                        datatv.original_name
                    }</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>ultimo capitulo: ${datatv.last_air_date}</p>
                    <p>Puntuaciòn: ${datatv.popularity}</p>
                    <p>lenguaje original: ${datatv.original_language}</p>
                    <p>Genero: ${datatv.genres[0].name}</p>
                </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
                `;
        });
}
