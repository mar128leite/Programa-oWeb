// script.js
document.getElementById('searchButton').addEventListener('click', function() {
    const input = document.getElementById('searchInput').value;
    fetch(`http://www.omdbapi.com/?s=${input}&apikey=http://www.omdbapi.com/?i=tt3896198&apikey=e05cfd61`)
        .then(response => response.json())
        .then(data => {
            const movies = data.Search;
            const moviesContainer = document.getElementById('movies');
            moviesContainer.innerHTML = '';
            movies.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.innerHTML = `
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                    <img src="${movie.Poster}" alt="${movie.Title}">
                `;
                moviesContainer.appendChild(movieElement);
            });
        });
});
