const Facade = require('../lib/facade');
const colourSchema = require('../models/colour');

class ColourFacade extends Facade {}

module.exports = new ColourFacade(colourSchema);
