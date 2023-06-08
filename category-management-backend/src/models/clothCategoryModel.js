"use strict"

const Sequelize = require('sequelize');

module.exports = global.db.define('cloth', {
    id: {
        type: Sequelize.UUID(45),
        primaryKey: true
    },
    category: Sequelize.TEXT,
    user_category: Sequelize.STRING(12),
    instock: Sequelize.INTEGER(10),
}, {
    tableName: 'cloth'
});