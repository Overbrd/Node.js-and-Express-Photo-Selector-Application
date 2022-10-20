'use strict';
var express = require('express');
var router = express.Router();

var getData = function () {
    var data = {
        'item1': 'images/bloom.jpg',
        'item2': 'images/flower.jpg',
        'item3': 'images/cactus.jpg'
    }
    return data;
}

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Node.js and Express Image Selector App. Visual Studio 2022 Project', "data": getData() });
});

module.exports = router;
