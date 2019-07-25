var express = require('express');
var router = express.Router();


router.use(require('./src/user/user_data'))
router.use(require('./src/product/product_detail'))

module.exports = router