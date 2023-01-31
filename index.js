const express = require('express')
const app = express()
const port = 3000

//parse json using express
app.use(express.json())
app.use(express.urlencoded({extended: false}))

let movies = [{
    id: 1,
    name: 'Inception',
    director:'Christoper Nolan',
    release_date: '2010-07-16'
},
{
    id: 2,
    name: 'Titanic',
    director:'James Cameron',
    release_date: '2000-07-16'
},
{
    id: 3,
    name: 'Commando',
    director:'Arnold Shewazenegar',
    release_date: '1990-07-16'
},
{
    id: 4,
    name: 'Blood Sport',
    director:'Jean Claud Vandamme',
    release_date: '1984-07-16'
}
]

//get the movies list in the form of Json
app.get('/movie',(req,res)=>{
    res.json(movies)
})

//create movie
app.post('/movie',(req,res)=>{
    const mov = req.body
    console.log(mov)
    movies.push(mov)
    res.send('Movie created')
})

//search for movie in a list
app.get('/movie/:id', (req,res) =>{
    const id = req.params.id
    for(let movie of movies)
    {
        if(movie.id === id){
            res.json(movie)
            console.log(movie)
            return
        }
    }
    res.status(404).send('Movie not found')
})

app.delete('/movie/:id', (req,res)=>{
    const id = req.params.id

    movies = movies.filter(movie =>{
        if(movie.id === id){
            return true
        }
        return false
    })
    res.send('Movie is deleted')
})

//set server to listen at specific port
app.listen(port,()=>
    console.log(`server listening at port ${port}`))

