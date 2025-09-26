// Select main "Add Movie" modal
const addMovieModal = document.getElementById('add-modal');

// Select the button in the header that opens the "Add Movie" modal
const startAddMovieButton = document.querySelector('header button');

// Select the dark background overlay
const backdrop = document.getElementById('backdrop');

// Select buttons inside the Add Movie modal
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive'); // "Cancel" button
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;    // "Add" button

// Select all user input fields (Title, Image URL, Rating)
const userInputs = addMovieModal.querySelectorAll('input');

// Section shown when no movies exist
const entryTextSection = document.getElementById('entry-text');

// Modal for confirming movie deletion
const deleteMovieModal = document.getElementById('delete-modal');

// Array to store all movies
const movies = [];

// Toggle visibility of the backdrop (show/hide)
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

// Show or hide the "no movies found" text depending on movie list
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

// Close the delete confirmation modal
const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

// Permanently delete a movie by ID
const deleteMovieHandler = movieId => {
  let movieIndex = 0;

  // Find the index of the movie in the array
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }

  // Remove movie from array
  movies.splice(movieIndex, 1);

  // Remove corresponding movie element from the DOM
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();

  // Close modal and update UI
  closeMovieDeletionModal();
  updateUI();
};

// Open delete confirmation modal and attach event listeners
const startDeleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();

  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  // Clone button to clear old event listeners
  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  // Re-select the new cloned button
  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  // Reset and attach fresh event listeners
  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

// Render a new movie element into the movie list
const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';

  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;

  // Clicking a movie triggers delete confirmation
  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  );

  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

// Close the "Add Movie" modal
const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

// Show the "Add Movie" modal
const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

// Clear all input fields
const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

// Cancel adding a new movie
const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

// Add a new movie with input validation
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  // Validate inputs
  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  // Create movie object
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  // Save movie and update UI
  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

// Handle backdrop clicks (close modals & clear inputs)
const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

// --- Event Listeners ---
startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
