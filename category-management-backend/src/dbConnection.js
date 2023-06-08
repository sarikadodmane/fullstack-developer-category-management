"use strict"
const Sequelize = require('sequelize');
require('mysql2');

module.exports = (config) => {
  console.log("Loading connection pool.", JSON.stringify(config))
  InitMysql(config)
  console.log("Loaded connection pool.")
}

function InitMysql(config) {

  global.db = new Sequelize(config.mysqldbConnection.database, config.mysqldbConnection.user, config.mysqldbConnection.password, {
    host: config.mysqldbConnection.host,
    dialect: 'mysql',
    port: config.mysqldbConnection.port,
    define: {
      freezeTableName: true,
      timestamps: true,
      createdAt: 'created_date',
      updatedAt: 'last_modified',
    },
    sync: { force: false }
  });

  global.db.authenticate()
    .then(function (err) {
      console.log('Connected to mysql db.');
    })
    .catch(function (err) {
      console.log('Unable to connect to the mysql db:', err);
    });
}