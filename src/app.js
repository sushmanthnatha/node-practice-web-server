const express = require('express')
const path = require('path')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app = express()


// Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname+'/../templates/views')
const partialsPath = path.join(__dirname+'/../templates/partials'
)
// setup static dir to serve
app.use(express.static(publicDirectoryPath))

//this is no longer called when we call static page
// app.get('', (req, res)=>{
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help', (req, res)=>{
//     res.send({
//         name: 'sush',
//         age: 24
//     })
// })

// app.get('/about', (req, res)=>{
//     res.send('<h1>About Weather</h1><br/><p>This app is about giving weather forecase for a given location by latlong or name of the place</p>')
// })

// setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)



app.get('', (req,res) => {
    res.render('index', {
        title: 'Home',
        name: 'Sushmanth'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Sushmanth'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        question : 'How to request weather data for a location ?',
        answer: 'just pass your location to our weather forecase endpoint',
        title:'Help',
        name: 'Sushmanth'
    })
})

app.get('/weather', (req,res)=>{
    res.send({
        location: 'Ongole, Andhra Pradesh',
        temperature: 28,
        feelsLike: 25
    })
})

app.get('/help/*', (req, res) => {
    res.send('My 404 help page')
})
app.get('*', (req, res)=>{
    res.send('My 404 page')
})

app.listen(3000, ()=>{
    console.log('Server started on port 3000')
})