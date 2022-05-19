const userModel = require ('../models/User');

const getUser = (req, res) => {
    res.send('get user');
}

const createUser = async (req, res) => {
    
    try {
        
        userExist = await userModel.findOne({ email: req.body.email });
        if (userExist){
            return res.send('This email already exist')
        }

        let user = new userModel();
        user.name = req.body.name;
        user.email = req.body.email;
        user.status = req.body.status;
        user.creation_date = new Date();
        user.update_date = new Date();

        user = await user.save();
        res.send(user);
    } catch (error){
        console.log(error);
        res.send('An error has ocurred');
    }
}

const editUser = (req, res) => {
    res.send(req.body);
}

module.exports = {getUser, createUser, editUser}

