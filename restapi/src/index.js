const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//setting
app.set('port', process.env.PORT || 9000);
app.set('json space', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


//routes
app.use('/api/hoteles', require('./routes/hoteles'));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
