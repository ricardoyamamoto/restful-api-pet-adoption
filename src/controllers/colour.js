const Controller = require('../lib/controller');
const colourFacade = require('../facades/colour');

class ColourController extends Controller {}

module.exports = new ColourController(colourFacade);
