/* ||Movies API|| */

/* Get HTML elements*/
const container = document.getElementById('container'); //the moveies container
function addFavorite(movie) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

/* Fetch movies data */
fetch('https://api.themoviedb.org/3/movie/popular?api_key=8d8908b7191888e122eecab376e0200a')
  .then(res => res.json())
  .then(data => {
    data.results.forEach(element => {
      // Create movie card elements
      let movie = document.createElement('div');
      let poster = document.createElement('img');
      let title = document.createElement('h3');
      let rating = document.createElement('span');
      let favorite = document.createElement('button');

      // Set content and attributes
      poster.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
      title.textContent = element.title;
      rating.textContent = element.vote_average;
      favorite.innerHTML = '<img src="../assets/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Favorite" style="width: 24px; cursor: pointer;">';
      favorite.classList.add('favorite_btn');

      // Append elements
      movie.appendChild(poster);
      movie.appendChild(title);
      movie.appendChild(rating);
      movie.appendChild(favorite);
      container.appendChild(movie);

      // Styling
      movie.style.border = '1px solid var(--sub-bg)';
      movie.style.backgroundColor = 'var(--sub-bg)';
      movie.style.borderRadius = '8px';
      movie.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.29)';
      movie.style.height = '53vh';

      poster.style.width = '100%';
      poster.style.borderRadius = '10px';
      title.style.margin = '0.5rem';
      title.style.color = 'var(--text-cl)';
      rating.style.margin = '0.5rem';
      rating.style.color = 'var(--text-cl)';
      rating.style.fontWeight = 'bold';

      favorite.style.background = 'none';
      favorite.style.border = 'none';
      favorite.title = 'Add to Favorites';

      // ✅ Attach event listener here
      favorite.addEventListener("click", () => {
        alert(`${element.title} added to favorites!`);
        // logic to add to favorites
        let filmOBJ ={
            title: element.title,
            poster_path: element.poster_path,
            vote_average: element.vote_average
        }
        addFavorite(filmOBJ);
      });
    });
  });


/* ||Nav bar|| */

/* Toggle navigation bar */
const showNavBtn = document.querySelector('.showNav');
const aside = document.querySelector('aside');
const hideNavBtn = document.getElementById('hideNav');

hideNavBtn.addEventListener("click", () => {
    aside.style.display = 'none';
    showNavBtn.style.display = 'block';
})

showNavBtn.addEventListener("click", () => {
    aside.style.display = 'block';
    showNavBtn.style.display = 'none';
})

/* ||Favorites|| */
favorite_btn.addEventListener("click", () => {
    // Logic to change button state
    favorite_btn.style.backgroundColor = '#ccc';
});