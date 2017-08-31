const Controller = require('../lib/controller');
const petFacade = require('../facades/pet');

class PetController extends Controller {}

module.exports = new PetController(petFacade);
