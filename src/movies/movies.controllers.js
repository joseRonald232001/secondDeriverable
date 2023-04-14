

const moviesDB = [];
let id = 1;
const findAllMovies = async ()=>{
  
    return await moviesDB;
}

const findMoviesById = async(idMovie)=>{
   const id = Number(idMovie);
    const data = moviesDB.find(movie=> movie.id===id)
    return await data;
}


const createNewMovie = async(objetMovie)=>{

const newMovie = {
	id :id++,
	title:objetMovie.title,
  description:objetMovie.description,
  year:objetMovie.year,
  director:objetMovie.director
}
 await  moviesDB.push(newMovie);
    
 return moviesDB ;
}

module.exports= {
    findAllMovies,
    findMoviesById,
    createNewMovie
}