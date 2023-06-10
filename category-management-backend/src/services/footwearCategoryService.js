const Footwear = require('../models/footwearCategoryModel');

exports.createFootwearCategory = async function (category, user_category, instock) {
    try {
        await Footwear.create({
            category,
            user_category,
            instock,
            status: 1
        });
        return { message: 'footwear category has been created' };
    } catch (error) {
        logger.error(error)
        throw error;
    }
};

exports.findFootwearCategory = async function (category, user_category) {
    try {
        return Footwear.findOne({
            where: { category, user_category, status: 1 }
        });
    } catch (error) {
        logger.error(error)
        throw error;
    }
};

exports.findFootwearCategoryById = async function (id) {
    try {
        return Footwear.findOne({
            where: { id, status: 1 }
        });
    } catch (error) {
        logger.error(error)
        throw error;
    }
};

exports.updateFootwearCategory = async function (id, data) {
    return Footwear.update({
        category: data.category, user_category: data.user_category, instock: data.instock, last_modified: new Date()
    }, { where: { id, status: 1 } })
        .catch(error => {
            logger.error(error)
            throw error;
        })
};

exports.deleteFootwearCategory = async function (id) {
    try {
        return Footwear.destroy(
            { where: { id, status: 1 } });
    } catch (error) {
        logger.error(error)
        throw error;
    }
};

exports.getFootwearCategoryList = async function () {
    try {
        return Footwear.findAll();
    } catch (error) {
        logger.error(error)
        throw error;
    }
};