logger.info("Intializing app")

const loadConfig = () =>{
    const nodeEnv = process.env.NODE_ENV || "development.js";
    global.config = require(`./src/config/${nodeEnv}`);
    logger.info("loaded application");
};

const loadDB = () =>{
    if(global.config){
        require("./src/dbConnection")(global.config);
    }else{
        logger.error("load configuration");
        process.exit(1);
    }
}

loadConfig();
loadDB();
