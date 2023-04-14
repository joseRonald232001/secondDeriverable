const express = require('express');
const app = express();
const cors = require('cors');
const moviesRouter = require('./movies/movies.router');

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.status(200).json({message:"todo okey"})
})

app.use('/',moviesRouter)


const PORT =9000;
app.listen(PORT,()=>{
    console.log('todo okey')
})
module.exports = app





