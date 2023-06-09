const Cloth = require('../models/clothCategoryModel');

exports.createClothCategory = async function (category, user_category, sub_category, instock) {
    try {
        await Cloth.create({
            category,
            user_category,
            sub_category,
            instock,
            status: 1
        });
        return { message: 'cloth category has been created' };
    } catch (error) {
        logger.error(error)
        throw error;
    }
};

exports.findClothCategory = async function (category, user_category) {
    try {
        return Cloth.findOne({
            where: { category, user_category, status: 1 }
        });
    } catch (error) {
        ß
        logger.error(error)
        throw error;
    }
};

exports.updateClothCategory = async function (id, data) {
    return Cloth.findOne({
        where: { id }
    }).then(recordExists => {
        if (!recordExists) {
            return res.status(400).json({ error: 'record not found' });
        }
        return Cloth.update({
            category: data.category, user_category: data.user_category, sub_category: data.sub_category, instock: data.instock, last_modified: new Date()
        }, { where: { id, status: 1 } })
    }).catch(error => {
        logger.error(error)
        throw error;
    })
};

exports.deleteClothCategory = async function (id) {
    try {
        return Cloth.destroy({ where: { id, status: 1 } });
    } catch (error) {
        logger.error(error)
        throw error;
    }
};

exports.getClothCategoryList = async function () {
    try {
        return Cloth.findAll();
    } catch (error) {
        logger.error(error)
        throw error;
    }
};