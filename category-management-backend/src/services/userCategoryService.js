const userCategory = require('../models/userCategoryModel');

exports.createUserCategory = async function ({category,alias}) {
    try {
            await userCategory.create({
                category: category,
                alias: alias
            });
            return { message: 'user category has been created' }
    } catch (error) {
        console.error(error)
        throw error;
    }
};

exports.findUserCategory = async function ({alias}) {
    try {
        return userCategory.findOne({
            where: { alias }
        })
    } catch (error) {
        console.error(error)
        throw error;
    }
};

exports.getUserCategory = async function () {
    try {
        return userCategory.findAll()
    } catch (error) {
        console.error(error)
        throw error;
    }
};