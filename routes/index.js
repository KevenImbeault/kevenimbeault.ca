var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Accueil', menuId:'home'});
});

router.get('/logiciels', function(req, res, next) {
  res.render('logiciels', {page:'Logiciels', menuId:'logiciels'});
});

router.get('/competences', function(req, res, next) {
  res.render('index', {page:'Compétences', menuId:'competences'});
});

module.exports = router;
