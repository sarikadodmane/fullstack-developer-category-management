const service = require('../services/clothCategoryService');
const Joi = require('joi');
const schema = Joi.object({
    category: Joi.string().required().valid("Dresses", "T-Shirts", "Shirts"),
    user_category: Joi.string().required().valid("W", "M"),
    sub_category: Joi.object(),
    instock: Joi.number().integer()
});

function controller() {

    this.createClothCategory = async function (req, res) {
        try {
            const verifiedResult = schema.validate(req.body);
            if (verifiedResult.error) {
                logger.error(verifiedResult.error)
                return res.status(400).json({ error: verifiedResult.error.message });
            }
            const { category, user_category, sub_category, instock } = req.body;
            const existingCategory = await service.findClothCategory(category, user_category);

            if (existingCategory) {
                res.status(200).send('cloth category already exists');
            } else {
                const result = await service.createClothCategory(category, user_category, sub_category, instock)
                res.status(201).send(result);
            }

        } catch (error) {
            logger.error(error)
            res.status(500).json({ error: "record creation failed" });
        }
    };

    this.updateClothCategory = async function (req, res) {
        try {
            if (!req.query.id) {
                return res.status(400).json({ error: 'input field id is missing in query param' });
            }
            const verifiedResult = schema.validate(req.body);
            if (verifiedResult.error) {
                logger.error(verifiedResult.error)
                return res.status(400).json({ error: verifiedResult.error.message });
            }
            const id = req.query.id;
            const data = req.body;
            await service.updateClothCategory(id, data )
            res.status(200).send({ message: "record updated Succesfully" });
        } catch (error) {
            logger.error(error)
            res.status(500).json({ error: "record updation failed" });
        }
    };

    this.deleteClothCategory = async function (req, res) {
        try {
            if (!req.query.id) {
                return res.status(400).json({ error: 'input field id is missing in query param' });
            }

            const id = req.query.id;
            await service.deleteClothCategory(id)
            res.status(200).send({ message: "record deleted Succesfully" });
        } catch (error) {
            logger.error(error)
            res.status(500).json({ error: "record deletion has failed" });
        }
    }

    this.getClothCategoryList = async function (req, res) {
        try {
            const result = await service.getClothCategoryList();
            res.status(200).send(result);
        } catch (error) {
            logger.error(error)
            res.status(500).json({ error: "Fetching record list has failed" });
        }
    }

}

module.exports = new controller()
