let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const container = document.getElementById('container'); //the moveies container

favorites.forEach(element => {
  // create card
  let movie = document.createElement('div');
  let poster = document.createElement('img');
  let title = document.createElement('h3');
  let rating = document.createElement('span');
  let remove = document.createElement('button');

  // set content and attributes
  poster.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
  title.textContent = element.title;
  rating.textContent = element.vote_average;
  remove.innerHTML = '<img src="../assets/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Remove" style="width: 24px; cursor: pointer;">';
  remove.title = 'Remove from Favorites';

  // append elements
  movie.appendChild(poster);
  movie.appendChild(title);
  movie.appendChild(rating);
  container.appendChild(movie);
  movie.appendChild(remove);

  // styling
  movie.style.border = '1px solid var(--sub-bg)';
  movie.style.backgroundColor = 'var(--sub-bg)';
  movie.style.borderRadius = '8px';
  movie.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.62)';

  poster.style.width = '100%';
  poster.style.borderRadius = '10px';
  title.style.margin = '0.5rem';
  title.style.color = 'var(--text-cl)';
  rating.style.margin = '0.5rem';
  rating.style.color = 'var(--text-cl)';
  rating.style.fontWeight = 'bold';

  remove.style.background = 'none';
  remove.style.border = 'none';
  remove.title = 'Remove from Favorites';

  // ✅ Attach event listener here
  remove.addEventListener("click", () => {
    // logic to remove from favorites
    favorites = favorites.filter(fav => fav.title !== element.title);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    location.reload(); // reload the page to reflect changes
  });
});
