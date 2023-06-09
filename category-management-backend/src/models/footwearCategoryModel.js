"use strict"

const Sequelize = require('sequelize');

module.exports = global.db.define('footwear', {
    id: {
        type: Sequelize.UUID(45),
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    category: Sequelize.STRING(45),
    user_category: Sequelize.STRING(10),
    instock: Sequelize.INTEGER,
    status : Sequelize.TINYINT
}, {
    tableName: 'footwear'
});