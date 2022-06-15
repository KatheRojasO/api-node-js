const validateDeviceBrand = (req) => {

    const validations = [];


    if(!req.body.name){
        validations.push('Name is required');
    }
    
    if(!req.body.status){
        validations.push('status is required');
    }

    return validations;
}

module.exports ={
    validateDeviceBrand
}