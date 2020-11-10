let movies = [
  {
    id: 0,
    name: "star wars",
    score: 1,
  },
  {
    id: 1,
    name: "avengers",
    score: 8,
  },
  {
    id: 2,
    name: "god father",
    score: 99,
  },
  {
    id: 3,
    name: "logan",
    score: 22,
  },
];

export const getMovies = () => movies;

const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
