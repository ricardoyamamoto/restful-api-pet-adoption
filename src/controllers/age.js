const Controller = require('../lib/controller');
const ageFacade = require('../facades/age');

class AgeController extends Controller {}

module.exports = new AgeController(ageFacade);
