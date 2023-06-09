const UserCategory = require('../models/userCategoryModel');

exports.createUserCategory = async function ({ category, alias }) {
    try {
        await UserCategory.create({
            category,
            alias,
            status: 1
        });
        return { message: 'user category has been created' }
    } catch (error) {
        logger.error(error)
        throw error;
    }
};

exports.findUserCategory = async function ({ alias }) {
    try {
        return UserCategory.findOne({
            where: { alias, status: 1 }
        })
    } catch (error) {
        logger.error(error)
        throw error;
    }
};

exports.getUserCategory = async function () {
    try {
        return UserCategory.findAll()
    } catch (error) {
        logger.error(error)
        throw error;
    }
};

exports.getShopCategoryList = async function () {
    try {
        return UserCategory.findAll() //todo
    } catch (error) {
        logger.error(error)
        throw error;
    }
};
