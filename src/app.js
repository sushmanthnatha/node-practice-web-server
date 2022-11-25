const express = require('express')

const app = express()

app.get('', (req, res)=>{
    res.send('Hello express')
})

app.get('/help', (req, res)=>{
    res.send('Help page')
})

app.get('/about', (req, res)=>{
    res.send('About us')
})

app.get('/weather', (req,res)=>{
    res.send('Weather details')
})

app.listen(3000, ()=>{
    console.log('Server started on port 3000')
})