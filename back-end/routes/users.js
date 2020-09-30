const router = require('express').Router();
let User = require('../models/user.models');

router.route('/').get((req,res)=>{
    User.find() // mongoose method that gets all the users in the mongodb atlas db
    .then(users => res.json(users))
    .catch(err => res.status(400).json('ERRor: '+err));
});


router.route('/add').post((req,res)=>{

const username = req.body.username;
const newUser = new User({username});
newUser.save()
.then(()=> res.json('User Added'))
.catch(err => res.status(400).json('ERRor: '+err));

});

module.exports = router;