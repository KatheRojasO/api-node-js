const validateInventory = (req) => {

    const validations = [];


    if(!req.body.serialNumber){
        validations.push('Serial number is required');
    }
    
    if(!req.body.model){
        validations.push('Model is required');
    }
    
    if(!req.body.description){
        validations.push('Description is required');
    }
    
    if(!req.body.color){
        validations.push('Color is required');
    }
    
    if(!req.body.picture){
        validations.push('Picture is required');
    }
    
    if(!req.body.purchaseDate){
        validations.push('Purchase date is required');
    }
       
    if(!req.body.price){
        validations.push('Price is required');
    }
    
    if(!req.body.user){
        validations.push('User is required');
    }
     
    if(!req.body.brand){
        validations.push('Brand is required');
    }

    if(!req.body.deviceType){
        validations.push('Device Type is required');
    }

    if(!req.body.deviceStatus){
        validations.push('Device status is required');
    }

    return validations;
}

module.exports ={
    validateInventory
}