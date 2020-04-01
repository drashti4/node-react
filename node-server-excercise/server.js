const express = require('express');
const path = require('path');
let app = express();

// Body parser middleware
app.use(express.json()); // allow us to handle raw json
app.use(express.urlencoded({extended: false})); // handle url encoded data

//set static path
app.use(express.static(path.join(__dirname,'public')));

// users api routes
app.use('/',require('./routes/api/userAPI')); // set user api

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
