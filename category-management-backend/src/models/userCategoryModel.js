"use strict"

const Sequelize = require('sequelize');

module.exports = global.db.define('user_category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category: Sequelize.STRING(20),
    alias: Sequelize.STRING(12),
    status : Sequelize.TINYINT
}, {
    tableName: 'user_category'
});