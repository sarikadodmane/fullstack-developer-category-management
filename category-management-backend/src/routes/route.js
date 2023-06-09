const express = require('express');
const app = express.Router();
const { query } = require('express-validator');

const userCategoryController = require('../controllers/userCategoryController');
const clothCategoryController = require('../controllers/clothCategoryController');
const footWearCategoryController = require('../controllers/footwearCategoryController');

app.get('/createUserCategory', [
    query('category').custom((value => {
        const lowercaseValue = value.toLowerCase();
        if (!['women', 'men'].includes(lowercaseValue)) {
            throw new Error('Only Women or Men categories allowed');
        }
        return true;
    }))
], (req, res) => {
    userCategoryController.createUserCategory(req, res)
});

app.get('/getUserCategory', (req, res) => {
    userCategoryController.getUserCategory(req, res)
});

app.post('/createClothCategory', (req, res) => {
    clothCategoryController.createClothCategory(req, res)
});

app.put('/updateClothCategory', (req, res) => {
    clothCategoryController.updateClothCategory(req, res)
});

app.delete('/deleteClothCategory', (req, res) => {
    clothCategoryController.deleteClothCategory(req, res)
});

app.get('/getClothCategoryList', (req, res) => {
    clothCategoryController.getClothCategoryList(req, res)
});

app.post('/createFootwearCategory', (req, res) => {
    footWearCategoryController.createFootwearCategory(req, res)
});

app.put('/updateFootwearCategory', (req, res) => {
    footWearCategoryController.updateFootwearCategory(req, res)
});

app.delete('/deleteFootwearCategory', (req, res) => {
    footWearCategoryController.deleteFootwearCategory(req, res)
});

app.get('/getFootwearCategoryList', (req, res) => {
    footWearCategoryController.getFootwearCategoryList(req, res)
});

app.get('/getShopCategoryListInNLevels', (req, res) => {
    userCategoryController.getShopCategoryListInNLevels(req, res)
});

app.get('/getShopCategoryListInTreeStructure', (req, res) => {
    userCategoryController.getShopCategoryListInTreeStructure(req, res)
}); 

module.exports = app;