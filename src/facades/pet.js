const Facade = require('../lib/facade');
const petSchema = require('../models/pet');

class PetFacade extends Facade {

    find(...args) {
        return this.Schema
            .find(...args)
            .populate('age breed colour')
            .exec();
    }
}

module.exports = new PetFacade(petSchema);
