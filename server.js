const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const bgrCtrl = require('./controllers/burger_controller.js');

const PORT = 8080;

let app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', bgrCtrl);


// Run the server
app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
});