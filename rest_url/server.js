const express = require('express');
const path = require('path');
const app = express();
const users = require('./users');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/',(req,res)=>{
    res.render('index',{
        title: 'Users App',
        users
    });
});

// set static folder usually not gonna do something like this
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/users',require('./api/rest-url.http'));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));


/**
 * const express = require('express');
 const app = express();
 const PORT = 3002;
 const STATUS_OK = 200;
 const STATUS_NOT_FOUND = 400;
 const CONTENT_TYPE_JSON = 'application/json';
 const CONTENT_TYPE_HTML = 'text/html';
 //middleware == use
 app.use(express.static('./public'));
 app.get('/',sendRootPage);

 function sendRootPage(req,res){
    res.status(STATUS_OK).contentType(CONTENT_TYPE_HTML).sendfile('./public/index.html')
}
 app.listen(3002,(req,res)=>{
   console.log(`server started ${PORT}`);
});
 * */