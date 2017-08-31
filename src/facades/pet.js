const Facade = require('../lib/facade');
const petSchema = require('../models/pet');

class PetFacade extends Facade {}

module.exports = new PetFacade(petSchema);
