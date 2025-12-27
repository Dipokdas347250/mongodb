const { default: mongoose } = require("mongoose");

function dbConfig(){
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.BD_PASSWORD}@cluster0.rxxqozs.mongodb.net/Demo?appName=Cluster0`).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log("Error connecting to MongoDB", err);
    });

}

module.exports = dbConfig;