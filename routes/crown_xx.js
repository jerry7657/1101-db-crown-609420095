var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('crown_xx', { title: 'Express', name: 'Jerry Yin', id: `123456789` });
});

module.exports = router;
