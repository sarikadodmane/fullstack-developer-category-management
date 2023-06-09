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

exports.getShopCategoryListInNLevels = async function () {
    try {
        const query = `SELECT category_id, category_name, parent_id, 0 AS level
        FROM categories
        WHERE parent_id IS NULL
        UNION ALL
        SELECT c.category_id, c.category_name, c.parent_id, p.level + 1
        FROM categories AS c
        JOIN (
          SELECT category_id, level
          FROM (
            SELECT category_id, category_name, parent_id, @level := @level + 1 AS level
            FROM categories
            JOIN (SELECT @level := 0) AS l
          ) AS temp
        ) AS p ON c.parent_id = p.category_id`;

          return global.db.query(query);
    } catch (error) {
        logger.error(error)
        throw error;
    }
};

exports.getShopCategoryListIntreeStructure = async function () {
    try {
        const query1 = `SET @level := 0;`
        const query2 = `SELECT CONCAT(REPEAT(' ', level - 1), category_name) AS category_tree
        FROM (
          SELECT category_id, category_name, parent_id, @level := @level + 1 AS level
          FROM categories
          WHERE parent_id IS NULL
          UNION ALL
          SELECT c.category_id, c.category_name, c.parent_id, @level := @level + 1
          FROM categories AS c
          JOIN (
            SELECT category_id, parent_id
            FROM categories
          ) AS p ON c.parent_id = p.category_id
        ) AS result
        ORDER BY category_id;`;
        return global.db.query(query1)
        .then(results =>{
            return global.db.query(query2)
        })
    } catch (error) {
        logger.error(error)
        throw error;
    }
};