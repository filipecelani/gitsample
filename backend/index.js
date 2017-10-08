const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const logTypes = {
    "combined": "combined",
    "dev": "dev",
    "tiny": "tiny",
    "short": "short",
    "common" : "common"
};

const calc = require('./calculadora');

app.set('view engine', 'ejs');
app.use(cors());
app.use(morgan(logTypes.common));
app.use('/templates',express.static('views'))
app.use('/calculadora',calc);
app.get('/',function(req,res){
    res.send('Hello');
});


app.listen(3000,function() {
    console.log('listen at http://localhost:3000');
});