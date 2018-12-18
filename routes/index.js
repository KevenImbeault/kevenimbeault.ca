var express = require('express');
var router = express.Router();
var butter = require('buttercms')('token');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Accueil', menuId:'home'});
});

router.get('/developpement-logiciel', function(req, res, next) {
  res.render('developpement-logiciel/index', {page:'Développement logiciel', menuId:'developpement-logiciel'});
});

router.get('/blog', function(req, res, next) {
    var page = req.params.page || 1;

    butter.post.list({page_size: 10, page: page}).then(function(resp) {
      res.render('blog/index', {
        page:'Blog',
        menuId:'blog',
        posts: resp.data.data,
        next_page: resp.data.meta.next_page,
        previous_page: resp.data.meta.previous_page
      })
    })
});

router.get('/blog/:slug', function renderPost(req, res) {
  var slug = req.params.slug;

  butter.post.retrieve(slug).then(function(resp) {
    res.render('blog/post', {
      page:'Blog',
      menuId:'blog-post',
      title: resp.data.data.title,
      post: resp.data.data,
      published: new Date(resp.data.data.published)
    })
  })
});

module.exports = router;
