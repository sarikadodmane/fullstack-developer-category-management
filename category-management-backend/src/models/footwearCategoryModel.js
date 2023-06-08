"use strict"

const Sequelize = require('sequelize');

module.exports = global.db.define('footwear', {
    id: {
        type: Sequelize.UUID(45),
        primaryKey: true
    },
    category: Sequelize.TEXT,
    user_category: Sequelize.STRING(12),
    instock: Sequelize.INTEGER(10),
    alias: Sequelize.STRING(12),
}, {
    tableName: 'footwear'
});