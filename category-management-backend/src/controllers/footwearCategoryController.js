const service = require('../services/footwearCategoryService');
const Joi = require('joi');
const schema = Joi.object({
    category: Joi.string().required().valid("Branded", "Non Branded"),
    user_category: Joi.string().required().valid("W", "M"),
    instock: Joi.number().integer()
});

function controller() {

    this.createFootwearCategory = async function (req, res) {
        try {
                const verifiedResult = schema.validate(req.body);
                if (verifiedResult.error) {
                    logger.error(verifiedResult.error)
                    return res.status(400).json({ error: verifiedResult.error.message });
                }

                const { category, user_category, instock } = req.body;
                const existingCategory = await service.findFootwearCategory(category, user_category);
                if (existingCategory) {
                    res.status(200).send('footwear category already exists');
                } else {
                    const result = await service.createFootwearCategory(category, user_category, instock)
                    res.status(201).send(result);
                }
        } catch (error) {
            logger.error(error)
            res.status(500).json({ error: "record creation has failed" });
        }
    };

    this.updateFootwearCategory = async function (req, res) {
        try {
            if (!req.query.id) {
                return res.status(400).json({ error: 'input field id is missing in query param' });
            }
            const id = req.query.id;
            const data = req.body;
            const verifiedResult = schema.validate(data);
            if (verifiedResult.error) {
                logger.error(verifiedResult.error)
                return res.status(400).json({ error: verifiedResult.error.message });
            }

            const existingCategory = await service.findFootwearCategoryById(id);
            if (existingCategory) {
                await service.updateFootwearCategory(id, data)
                res.status(200).send({ message: "record updated Succesfully" });
            } else {
                res.status(404).json({ error: "record not found" });
            }
        } catch (error) {
            logger.error(error)
            res.status(500).json({ error: "updating record has failed" });
        }
    };

    this.deleteFootwearCategory = async function (req, res) {
        try {
            if (!req.query.id) {
                return res.status(400).json({ error: 'input field id is missing in query param' });
            }
            const id = req.query.id;
            await service.deleteFootwearCategory(id)
            res.status(200).send({ message: "record deleted Succesfully" });
        } catch (error) {
            logger.error(error)
            res.status(500).json({ error: "deleting record has failed" });
        }
    }

    this.getFootwearCategoryList = async function (req, res) {
        try {
            const result = await service.getFootwearCategoryList()
            res.status(200).send(result);
        } catch (error) {
            logger.error(error)
            res.status(500).json({ error: "Fetching record list has failed" });
        }
    }

}

module.exports = new controller()
