const express = require('express')
const path = require('path')

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
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

app.get('/weather', (req,res)=>{
    res.send({
        location: 'Ongole, Andhra Pradesh',
        temperature: 28,
        feelsLike: 25
    })
})

app.listen(3000, ()=>{
    console.log('Server started on port 3000')
})