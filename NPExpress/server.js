const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/',(req,res)=>{
res.render('index',{
    title: 'Member App',
    members
});
});

// set static folder usually not gonna do something like this
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members',require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));


// Init middleware
//app.use(logger);
// create root points or route handler
/*app.get('/',(req,res)=>{
   //res.send('<h1>Hello world from node</h1>');
   res.sendFile(path.join(__dirname, 'public','index.html'));
});*/
