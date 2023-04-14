

const router = require('express').Router();
  const moviesServices= require('./movies.services');




  router.get('/movies',moviesServices.getAllMovies);

  router.get('/movies/:id',moviesServices.getAllMovieById);

  router.post('/movies',moviesServices.createMovies);

  module.exports=router;




