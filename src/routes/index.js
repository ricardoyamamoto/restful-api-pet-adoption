const Router = require('express').Router;
const router = new Router();

const user = require('./user');
const pet = require('./pet');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to restful-api-pet-adoption API!' });
});

router.use('/user', user);
router.use('/pet', pet);

module.exports = router;
