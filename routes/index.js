var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Accueil', menuId:'home'});
});

router.get('/developpement-logiciel', function(req, res, next) {
  res.render('developpement-logiciel/index', {page:'Développement logiciel', menuId:'developpement-logiciel'});
});

module.exports = router;
