import App from '../src/App';

const express = require('express');
const morgan = require('morgan')
const app = express();
const path = require('path');



//SERVER PORT SETTINGS
app.set('port', process.env.PORT || 3000);


//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

//ROUTES
app.use(require('./routes/task.routes'))

//STATIC FILES
app.use(express.static(path.join(__dirname, '/../public')));
//INICIARLIZAR SERVIDOR
app.listen(app.get('port'), () => {
    console.log(`Express server on port ${app.get('port')}`)
});