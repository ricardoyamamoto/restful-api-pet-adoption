const Facade = require('../lib/facade');
const breedSchema = require('../models/breed');

class BreedFacade extends Facade {}

module.exports = new BreedFacade(breedSchema);
