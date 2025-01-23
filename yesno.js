import express from 'express'
import { possibleAnswers } from './possible-answers.mjs'

const app = express()

<<<<<<< HEAD
=======
console.log('possibleAnswers', possibleAnswers)
>>>>>>> refs/remotes/origin/main


app.get('/', function (request, response) {
    const index = Math.floor(Math.random() * possibleAnswers.length)
    const answer = possibleAnswers[index]
    response.send(`
        <html><body>
            <h1 >${answer.answer}</h1>
        </body> </html>
        <style>
                body{
                background-image: url("${answer.image}");
                background-repeat: no-repeat; 
                background-position: center ;
                background-size: cover; 
                display: flex; 
                height : 100%;
                justify-content: center; 
                align-items: center;
                }
                h1{            
                    color : red ; 
                    font-size: 50px;
                    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); 
                    
                }            
        </style>
        `
        )
    
})

<<<<<<< HEAD
app.get('/api', function (request, response) {
    const index = Math.floor(Math.random() * possibleAnswers.length)
    response.send(possibleAnswers[index])
})

app.listen(3000, function () {
    console.log('Server listening on port 3000')
=======

app.get('/api', function (request, response) {
    const index = Math.floor(Math.random() * possibleAnswers.length)
    response.send(possibleAnswers[index])
>>>>>>> refs/remotes/origin/main
})


const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log(`app listening on port ${port}`)
})
