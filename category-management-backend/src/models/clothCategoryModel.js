"use strict"

const Sequelize = require('sequelize');

module.exports = global.db.define('cloth', {
    id: {
        type: Sequelize.UUID(45),
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    category: Sequelize.STRING(45),
    sub_category:Sequelize.JSON,
    user_category: Sequelize.STRING(10),
    instock: Sequelize.INTEGER,
    status : Sequelize.TINYINT
}, {
    tableName: 'cloth'
});