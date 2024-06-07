const Products = require('../model/products')

const createProducts = async (data) => {
    try{  
        const newProduct = new Products(data);
        await newProduct.save();
        return newProduct.name;
    }catch(err){
        throw err;
    }
}

module.exports = { createProducts }