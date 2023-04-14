

const moviesControllers = require('./movies.controllers');



const getAllMovies = (req,res)=>{
    moviesControllers.findAllMovies()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(error=>{
        res.status(404).json({message:error})
    });

}
const getAllMovieById = (req,res)=>{
    const id = req.params.id;
    moviesControllers.findMoviesById(id)
    .then(data=>{
        if(data){
            res.status(200).json(data);
        }
        else{
            res.status(400).json(error)
        }

    })
    .catch(error=>{
        res.status(400).json(error)
    });
    
}

const createMovies= (req,res)=>{
    const objetMovie = req.body;
   
    moviesControllers.createNewMovie(objetMovie)
    .then(data=>{
        res.status(201).json(data);
    })
    .catch(error=>{
        res.status(400).json(error)
    });

}



module.exports = {
    getAllMovies,
    getAllMovieById,
    createMovies
}