const express = require('express');
const router = express.Router();
let node_fs = require('../../../exercise-node-fs/src/node-fs');
let _fs = new node_fs();
let app = express();
const FILENAME = '../exercise-node-fs/JSONData.json';
let users = _fs.readFrom(FILENAME);

//Get all users
router.get('/',(req,res)=>{
    res.send(users);
});

//Get single user
router.get('/:id',(req,res)=>{
    console.log('current id is '+req.params.id);
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found){
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:`No user with id of ${req.params.id}`});
    }
});


// Update user
router.put('/:id',(req,res)=>{
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found!=undefined){

        const updUser = req.body;
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)){
                user.userName = updUser.userName? updUser.userName : user.userName;
                user.age = updUser.age? updUser.age : user.age;
                _fs.updateData(FILENAME, user);
                res.json({msg: 'User updated', user});
            }
        });
    }else{
        res.status(400).json({msg:`No user with id of ${req.params.id}`});
    }
});

// delete user
router.delete('/:id',(req,res)=>{
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found){
        res.json({msg: 'User deleted', members: users.filter(user => user.id !=  parseInt(req.params.id))});
    }else{
        res.status(400).json({msg:`No User with id of ${req.params.id}`});
    }
});

module.exports = router;