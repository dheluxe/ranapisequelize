const env = require('dotenv');
const express = require("express");
const CharInfo = express.Router();
const db = require('../models');


CharInfo.get('/online', (req, res) => {
    db.RanGame1.findAll({
        where: {
            ChaOnline: 1
        }
    })
})

