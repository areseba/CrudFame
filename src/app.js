const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const regRoutes = require('./routes/Registro.router');

const app = express();
app.set('port', 3000);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');

app.use(myconnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'seba1234',
  database: 'regfame'
}, 'single'));

app.listen(app.get('port'), () => {
  console.log('Listening on port ', app.get('port'));
});

app.use('/', regRoutes);

app.get('/', (req, res) => {
  res.render('home');
});