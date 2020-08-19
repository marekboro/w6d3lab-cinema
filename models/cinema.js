const Cinema = function (films) {
  this.films = films;
};

// Functions
Cinema.prototype.filmTitles = function (){
  const titles = this.films.map((film) =>{
    return film.title;
  });

  return titles;
}

Cinema.prototype.findFilmByTitle = function(title){
  const film = this.films.find((film) => {
    return film.title === title;
  });
  return film;
}

Cinema.prototype.findFilmsByGenre = function (genre) {
  const filmsFound = this.films.filter((film) => {
    return film.genre === genre;
  });

  return filmsFound;
}

Cinema.prototype.filmsFromYear = function (year){
  const filmsExist = this.films.some((film)=>{
    return film.year === year;
  });

  return filmsExist;
}

Cinema.prototype.overLength = function (length){
  const areAllOver = this.films.every((film) => {
    return film.length >= length;
  });
  return areAllOver;
}

Cinema.prototype.totalRunTime = function () {
  const total_runtime = this.films.reduce((total, film) => {
    return total + film.length;
  }, 0);
  return total_runtime;
}

// Extension

Cinema.prototype.filterBy = function(filterName, value){
  const filmsFound = this.films.filter((film) => {
    return film[filterName] === value;
  });

  return filmsFound;
}

module.exports = Cinema;
