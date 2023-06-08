const service = require('../services/userCategoryService');
const { validationResult } = require('express-validator');


function controller() {

    this.createUserCategory = async function (req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            } else {
                const category = req.query.category;
                alias = category.search(/w/i) >= 0 ? 'W' : 'M'; //regex

                const existingCategory = await service.findUserCategory({ alias });

                if(existingCategory){
                    res.status(200).send('user category already exists');
                }else{
                    const result = await service.createUserCategory({ category, alias })
                    res.status(201).send(result);
                }
            }

        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Record creation has failed" });
        }
    }

    this.getUserCategory = async function (req, res) {
        try {
            const result = await service.getUserCategory()
            res.status(200).send(result);
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Record creation has failed" });
        }
    }

}

module.exports = new controller()
