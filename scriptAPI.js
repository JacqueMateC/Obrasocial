const API_KEY = "";

const API_URL = "";

let currentPage = 1;

function llamarAPI(page) {
  fetch(`${$API_URL}/movie/pupular?page=${page}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })
    .then((response) => response.json())
    .then((data) => dibujarDatos(data));
}

// `

function dibujarDatos(data) {
  const filas = json.results.map((obj) => Pelicula(obj));
  document.querySelectorAll(".peliculasTendencia .peliculas").innerHTML =
    filas.join("");
}

function Pelicula(obj) {
  return`
    <a href="./pages/detalle.html">
    <div class="pelicula">
    <img class="imgTendencia" src="https://image.tmdb.org/t/p/w500/${obj.poster_path}" alt="${obj.title}" loading="lazy">    
    <div class="tituloPelicula">
    <h4>${obj.title}</h4>
    </div>
    </div>
    </a>
    `;
}

function cargarPaginaSiguiente() {
  currentPage++;
  llamarAPI(currentPage);
}

function cargarPaginaAnterior() {
  if (currentPage > 1) {
    currentPage--;
    llamarAPI(currentPage);
  }
}

document
  .queriSelector(".anterior")
  .addEventListener("click", cargarPaginaAnterior);
document
  .querySelector(".siguiente")
  .addEventListener("click", cargarPaginaSiguiente);

llamarAPI(currentPage);
