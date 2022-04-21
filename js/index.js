const API_URL_POPULAR =
  "https://api.themoviedb.org/3/movie/popular?api_key=ff767a08fc1285474f8f591370d12441&language=en-US&page=1";

const API_URL_TOP = 
  "https://api.themoviedb.org/3/movie/top_rated?api_key=ff767a08fc1285474f8f591370d12441&language=en-US&page=1"

const API_URL_UP = 
  "https://api.themoviedb.org/3/movie/upcoming?api_key=ff767a08fc1285474f8f591370d12441&language=en-US&page=1";

const API_URL_NEW = 
  "https://api.themoviedb.org/3/movie/latest?api_key=ff767a08fc1285474f8f591370d12441&language=en-US&page=1";


getMovies(API_URL_POPULAR);
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu_section_drower');
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
	document.querySelector("form").addEventListener("submit", (e) => {
		e.preventDefault();
		const apiSearchUrl =
		 `https://api.themoviedb.org/3/search/movie?query=${search.value}&api_key=ff767a08fc1285474f8f591370d12441&page=1`;
	   
		 getMovies(apiSearchUrl);
		 search.value = "";	  
	  });
  })


document.getElementById("get_popular_main").addEventListener("click", () => { 
	getMovies(API_URL_POPULAR)
  });

  
document.getElementById("get_top_main").addEventListener("click", () => {
    getMovies(API_URL_TOP);
  });

document.getElementById("get_upcoming_main").addEventListener("click", () => {
      getMovies(API_URL_UP);
  });

document.getElementById("get_popular_drawer").addEventListener("click", () => { 
	getMovies(API_URL_POPULAR)
	menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });

  
document.getElementById("get_top_drawer").addEventListener("click", () => {
    getMovies(API_URL_TOP);
	menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });

document.getElementById("get_upcoming_drawer").addEventListener("click", () => {
      getMovies(API_URL_UP);
	  menuBtn.classList.toggle('active');
	  menu.classList.toggle('active');
  });
  

  

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const respData = await resp.json();
  console.log(respData.results);
  showMovies(respData.results);
}
  
function showMovies(data) {
    const moviesEl = document.querySelector(".movies");
  
    document.querySelector(".movies").innerHTML = "";
  
    data.forEach((movie) => {
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.innerHTML = `
          <div class="movie__cover-inner">
          <img
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            class="movie__cover"
            alt="${movie.original_title}"
          />
          <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie__info">
          <div class="movie__title">${movie.original_title}</div>
        </div>
          `;
      moviesEl.appendChild(movieEl);
    });
}

const form_main = document.getElementById("form_main");
const search_main = document.getElementById("input_main");

form_main.addEventListener("submit", (e) => {
  e.preventDefault();
  const apiSearchUrl =
   `https://api.themoviedb.org/3/search/movie?query=${search_main.value}&api_key=ff767a08fc1285474f8f591370d12441&page=1`; 
   getMovies(apiSearchUrl);
   search_main.value = "";
   menuBtn.classList.toggle('active');
   menu.classList.toggle('active');
});

const form_drawer = document.getElementById("form_drawer");
const search_drawer = document.getElementById("input_drawer");

form_drawer.addEventListener("submit", (e) => {
  e.preventDefault();
  const apiSearchUrl =
   `https://api.themoviedb.org/3/search/movie?query=${search_drawer.value}&api_key=ff767a08fc1285474f8f591370d12441&page=1`; 
   getMovies(apiSearchUrl);
   search_drawer.value = "";
   menuBtn.classList.toggle('active');
   menu.classList.toggle('active');
});