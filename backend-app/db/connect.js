
const moongose = require ('mongoose');

const connectDB = (url) => {
    return moongose.connect(url);
}

module.exports = connectDB;
