const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
  }

const password= process.argv[2]

const url = `mongodb+srv://fullstack:${password}@fullstacks2020-04v5w.mongodb.net/phap?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const phoneSchema = new mongoose.Schema({
    name: String,
    phone: String,
    date: Date,
  })

const Phone = mongoose.model('Phone',phoneSchema)

if (process.argv.length>3){
    console.log('Its a entry')
    const phone = new Phone({
        name : process.argv[3],
        phone: process.argv[4],
        date: new Date()
    })
    
    phone.save().then(result=>{
        console.log('Number added to Phonebook')
        mongoose.connection.close()
    })}
    else{
        Phone.find({}).then(result =>{
            result.forEach(rset =>{
                console.log(rset)
            })
            mongoose.connection.close()
        })
    }


