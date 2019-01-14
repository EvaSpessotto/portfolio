const express = require('express');
const bodyParser = require('body-parser');
const app = express()

const projectsRouter = require('./routes/projects')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Pour stocker les images
app.use(express.static(__dirname + '/public'));

// Home
app.get('/', function (req, res) {
  res.send('Api portfolio')
})

// Projects
app.use('/api/projects', projectsRouter)

app.listen(8000);

