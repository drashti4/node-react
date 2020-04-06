const express = require('express');
const reactViews = require('express-react-views');
const httpHandler = require('./src/HTTPHandler');
const path = require('path');
const app = express();
const PORT = 3002;
const cors = require('cors')

app.set('views', __dirname + '/views');
app.set('view engine','jsx');
app.engine('jsx',reactViews.createEngine()); // react template engine

// middleware == true
//app.use(express.static('./public')); //Conflicting views
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:false}));

app.get('/',getRootView);

function getRootView(req, res){
    console.log('Hi');
    res.render('index',{name:"D", title:"Good thing"});// This will call index.jsx
}

//app.get('/',httpHandler.sendRootPage);
app.get('/users',httpHandler.getUsers);
app.get('/users/:id',httpHandler.getUser);
app.post('/users',httpHandler.addUser);
app.put('/users/:id',httpHandler.updateUser);
app.delete('/users/:id',httpHandler.deleteUser);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));