const Router = require('express').Router;
const router = new Router();

const user = require('./user');
const pet = require('./pet');
const age = require('./age');
const breed = require('./breed');
const colour = require('./colour');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to restful-api-pet-adoption API!' });
});

router.use('/user', user);
router.use('/pet', pet);
router.use('/age', age);
router.use('/breed', breed);
router.use('/colour', colour);

module.exports = router;
