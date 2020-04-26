const express = require('express')
const app = express()

app.use(express.json())

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

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

const genId =()=>{
  const maxId = persons.length > 0
  ? Math.floor(Math.random() * (100 - persons.length) + persons.length)
  :0
  return maxId+1
}

app.post('/api/persons', (req, res) => {
  const person = req.body
  if (person.name&&person.number) {
    person.id=genId(persons)
    persons = persons.concat(person)
    res.json(person)
  }else{
    res.status(406).send('Data incomplete')
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})  