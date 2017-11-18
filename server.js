const express = require('express');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const bgrCtrl = require('./controllers/burger_controller.js');

const port = process.env.PORT || 8080;

// create the application
let app = express();

// give it access to the static structure
app.use(express.static('public'));

// add body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// add handlebars as the view engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// add the routes so the app can serve appropriately
app.use('/', bgrCtrl);


// Run the serverw
app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});