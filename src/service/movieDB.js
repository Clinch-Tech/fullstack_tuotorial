const movies = [
  {
    _id: "1",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    description:
      "long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc long desc ",

    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "2",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
  },
  {
    _id: "3",
    title: "Red Dead",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 15,
  },
  {
    _id: "4",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
  },
  {
    _id: "5",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
  },
  {
    _id: "6",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
  },
  {
    _id: "7",
    title: "American Pie",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 2,
  },
  {
    _id: "8",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
  },
  {
    _id: "9",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
  },
  {
    _id: "10",
    title: "Molloland Drive",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
  },
  {
    _id: "11",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
  },
  {
    _id: "12",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 3,
  },
  {
    _id: "13",
    title: "The Dark Knight",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
  },
  {
    _id: "14",
    title: "2001: Space Oddessy",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 17,
  },
  {
    _id: "15",
    title: "Shutter Island",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Thriller" },
    numberInStock: 9,
  },
  {
    _id: "16",
    title: "Goodfellas",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 17,
  },
  {
    _id: "17",
    title: "Godfather",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

// export function saveMovie(movie) {
//   let movieInDb = movies.find(m => m._id === movie._id) || {};
//   movieInDb.title = movie.title;
//   movieInDb.genre= movie.genre;

//   // movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);

//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movies;
}
