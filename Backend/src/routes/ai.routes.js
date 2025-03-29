const express = require('express');
const aicontroller=require('../controllers/ai.controller')
const router = express.Router();

router.post("/get-review",aicontroller.getreview)


module.exports= router;