const { $cn } = require('../config/config');
const Category = require('../models/category');

module.exports = {

    async create (req, res, next){
        try{
            const category = req.body;
            console.log(`Categoria enviada: ${category}`);

            const data = await Category.create(category);

            return res.status(201).json({
                message: 'Hubo un error al crear la categoria',
                succses: false,
                data: data.id
            });
        }
        catch (error){
            console.log(`Error: ${error}`);
            return res.status(501).json({
                message: 'Hubo un error al crear la categoria',
                succses: false,
                error: error
            });
        }
    } 
}