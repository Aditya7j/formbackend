const express =require("express");
const Form = require("../model/form.model");
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post("/",
body("email").isEmail().withMessage("Please enter valid email"),

async(req,res)=>{
    
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const form = await Form.create(req.body)
        res.status(200).send({info:"Success"})
    }
    catch(err){
        res.status(500).send(err)
    }
})

module.exports = router

