const express = require('express') // getting express library
const app = express() // storing in a variable
const users = require('./users.json') // getting the users 

app.use(express.json())  // creating midvar to stringyfy it

app.get('/', function (req, res) {
  res.send('Welcome to Home Page')
})
app.get('/users', function (req, res) { // get to read
  res.send(users)
})

app.post('/users', (req,res) => { // post to create or adding new user
  let x = req.body;   // storing req body
  
  let details = [...users, x]  // pushing into users arr
  res.send(details) // sending the response as added users array
})

app.patch('/users/:id', function (req, res) { // patch to update partially or put to change completely
  // console.log(req.body) // check if it is getting req body object
  let newDetails = users.map((el) => { // mapping to check and declare updated value
    if(el.id == req.body.id){
      el = req.body
    }
    return el
  })
  res.send(newDetails)
})

app.delete('/users/:id', function (req, res) {
  // console.log(req.params.id)
  let newDetails2 = users.filter(el => el.id != req.params.id) // filtering that if id is same as requested
  res.send(newDetails2)
})
 
app.listen(3000, () => { // Listening to a port so that domain can get it
  console.log('Listening on port 3000') // just to check it is listening
})