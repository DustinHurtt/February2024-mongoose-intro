var express = require('express');
var router = express.Router();

const cities = ["Miami", "Madrid", "Barcelona"];

/* GET home page. */
router.get('/', (req, res, next) => {

  res.send('<h1>Route complete</h1>')
});

router.get('/cities-list', (req, res, next) => {

  res.json({ cities })
})

module.exports = router;
