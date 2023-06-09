const port = process.env.PORT;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const database = process.env.DATABASE;

module.exports = {
    mysqldbConnection: {
        host: dbHost,
        user: dbUser,
        password: dbPassword,
        port: port,
        database:database
    }
}