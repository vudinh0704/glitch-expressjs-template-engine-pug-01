// npm
const express = require('express');
const pug = require('pug');

// app
const app = express();
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render('index.pug', {name: 'Vu'});
})

app.get('/todos', (request, response) => {
  response.render('todos');
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
