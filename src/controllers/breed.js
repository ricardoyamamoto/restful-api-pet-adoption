const Controller = require('../lib/controller');
const breedFacade = require('../facades/breed');

class BreedController extends Controller {}

module.exports = new BreedController(breedFacade);
