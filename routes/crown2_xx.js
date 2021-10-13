var express = require('express');
var router = express.Router();

const Category_xx = require('../models/Category_xx');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    let results = await Category_xx.fetchAll();
    console.log('results', JSON.stringify(results.rows));
    res.render('crown2_xx', {
      data: results,
      title: 'Crown2_xx',
      name: 'Hsingtai Chung',
      id: `123456789`,
    });
  } catch (e) {
    console.log('error', e);
  }
});

module.exports = router;
