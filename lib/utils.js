const {default: mongoose} = require('mongoose');
const process = require("next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss");

const connection = {}

const connectToDb = async () => {
    try {
        if(connection.isConnected()) {
            console.log('Using existing connection')
            return ;
        }
        const db = await mongoose.connect(process.env.MONGO)
        connection.isConnected = db.connection[0].readyState;
    } catch (error) {
        console.error(error);
        throw new Error(error)
    }
}