var http = require('http');
const server = require('./src/framework_drivers/server/server');
const sequelize = require('./src/framework_drivers/database/sequelize');
const port = process.env.PORT || 8000


const runServer = async () => {
    try{
        await sequelize.sync({alter: true});
        console.log('Connected to the database Successfully and syncing table ....');
    }
    catch(error){
        console.log(error);
    }

    try{
        const myserver = http.createServer(server);
        myserver.listen(port)

    }catch(error){
        console.log(error)
    }
}
runServer();