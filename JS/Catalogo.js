import { search } from 'https://arquivos.workdoc.com.br/estagio/movieData.js';


document.addEventListener("DOMContentLoaded", function () {
    const movieListElement = document.getElementById('movielist');

    const searchInput = document.getElementById('srcMovie');
    const searchBtn = document.getElementById('btnSearch');

    function displayMovies(movies) {
        movieListElement.innerHTML = '';
        if (movies.length === 0) {
            movieListElement.innerHTML = '<li>Nenhum filme encontrado.</li>';
            return;
        }

        movies.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = movie.Title;

            if (movie && movie.Poster) {
                const img = document.createElement('img');
                img.src = movie.Poster;
                img.alt = movie.Title;
                li.appendChild(img);
            }

            const a = document.createElement('a');
            a.textContent = "Saiba mais";
            a.href = `detail.html?id=${movie.imdbID}`;
            li.appendChild(a);
            movieListElement.appendChild(li);
        });
    }

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm) {
            const filteredMovies = search.filter(movie => movie.Title.toLowerCase().includes(searchTerm));
            displayMovies(filteredMovies);
        } else {
            displayMovies(search);
        }
    });

    displayMovies(search);
});