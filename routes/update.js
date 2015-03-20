router.get('/', function(req, res, next) {
  res.render('index', { title: 'updates hier', body: req.body });
});