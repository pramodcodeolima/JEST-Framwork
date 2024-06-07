var express = require('express');
var router = express.Router();
var {createProducts} = require('../services/productsApi')


router.post('/',async(req, res, next) => {
    try{
        const createNewProduct = await createProducts(req.body)
        if(createNewProduct){
            return res.status(201).json(createNewProduct)
        }else{
            return res.status(500).json(err)
        }
    }
    catch(err){
      return res.status(500).json(err)
    }
});

module.exports = router;