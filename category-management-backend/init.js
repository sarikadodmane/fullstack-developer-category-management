console.log("Intializing app")

const loadConfig = () =>{
    const nodeEnv = process.env.NODE_ENV || "development.js";
    global.config = require(`./src/config/${nodeEnv}`);
    console.log("loaded application");
};

const loadDB = () =>{
    if(global.config){
        require("./src/dbConnection")(global.config);
    }else{
        console.error("load configuration");
        process.exit(1);
    }
}

loadConfig();
loadDB();
