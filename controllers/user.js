const userModel = require ('../models/User');
const {validateUser} = require('../helpers/userValidator')

const getUser = async (req, res) => {
    try {
        const user = await userModel.find({status:'active'});
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send('A problem has ocurred');
    }
}

const createUser = async (req, res) => {
    
    try {

        const validations = validateUser(req);

        if (validations.length > 0){
            return res.status(400).send(validations);
        }
        
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

const editUser = async (req, res) => {
    try {

        let user = await userModel.findById(req.params.userId);
        if (!user){
            return res.status(400).send('This user does not exist');
        }

        userExist = await userModel.findOne({ name: req.body.name, _id:{$ne: user._id} });
        
        if (userExist){
            return res.status(400).send('This user already exist');
        }

        user.name = req.body.name;
        user.email = req.body.email;
        user.status = req.body.status;
        user.update_date = new Date();

        user = await user.save();
        res.send(user);
    } catch (error){
        console.log(error);
        res.status(500).send('An error has ocurred');
    }
}

module.exports = {getUser, createUser, editUser}

