var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Accueil', menuId:'home'});
});

router.get('/developpement-logiciel', function(req, res, next) {
  res.render('developpement-logiciel/index', {page:'Logiciels', menuId:'logiciels'});
});

router.get('/competences', function(req, res, next) {
  res.render('competences', {page:'Compétences', menuId:'competences'});
});
router.get('/idleproject', function(req, res, next) {
  res.render('developpement-logiciel/idleproject/index', {page:'Logiciels', menuId:'logiciels'});
});

module.exports = router;
