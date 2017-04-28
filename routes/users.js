var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/mainPage', function(req, res){
	console.log("in here");
	res.render('web/mainPage', {title:'FamilyShow mainPage', layout:'layouts/commonLayout'});
});

module.exports = router;
