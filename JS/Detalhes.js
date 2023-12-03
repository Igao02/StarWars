import { movieDetail } from 'https://arquivos.workdoc.com.br/estagio/movieData.js';

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    const movieData = movieDetail.find(movie => movie.imdbID === movieId);

    if (movieData) {
        document.getElementById("movieTitle").textContent = movieData.Title;
        document.getElementById("moviePoster").src = movieData.Poster;
        document.getElementById("moviePlot").textContent = movieData.Plot;
        document.getElementById("movieYear").textContent = movieData.Year;
     
        document.getElementById("movieGenre").textContent = movieData.Genre;
        document.getElementById("movieRuntime").textContent = movieData.Runtime;
        document.getElementById("movieLanguage").textContent = movieData.Language;
        document.getElementById("movieCountry").textContent = movieData.Country;
        document.getElementById("movieDirector").textContent = movieData.Director;
        document.getElementById("movieActors").textContent = movieData.Actors;
        document.getElementById("movieProduction").textContent = movieData.Production;
        document.getElementById("movieWriter").textContent = movieData.Writer;
        document.getElementById("movieBoxOffice").textContent = movieData.BoxOffice;
        document.getElementById("movieAwards").textContent = movieData.Awards;
        const movieRatings = document.getElementById('movieRatings');
        movieData.Ratings.forEach(rating => {
            const li = document.createElement('li');
            li.textContent = `${rating.Source}: ${rating.Value}`;
            movieRatings.appendChild(li);
        });
}
    else {
        document.querySelector('.content-wrapper').style.display = 'none';
        document.querySelector('.no-details-message').style.display = 'block';
    }

    const btnVoltar = document.getElementById('btnVoltar')

    btnVoltar.addEventListener('click', () => {
        window.location.href = "index.html"
    })
});