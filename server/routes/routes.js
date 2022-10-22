const Router = require('express');
const router = new Router();
const controller = require('../controller/controller');

router.get('/', controller.getData);
router.get('/name', controller.getName);
router.get('/filter', controller.filterData);
module.exports = router;
