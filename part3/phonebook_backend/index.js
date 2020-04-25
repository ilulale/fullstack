const express = require('express')
const app = express()

let persons = [
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 1
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 2
      },
      {
        "name": "Kshitij Tapre ",
        "number": "81131381",
        "id": 3
      }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
    const entries = persons.length
    const date = new Date()
    res.send(`<p>Phonebook has info of ${entries} people<br>
    ${date}<p>`)
})

app.get('/api/persons/:id',(req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id===id)
    if (person){
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})  