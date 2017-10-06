const Facade = require('../lib/facade');
const ageSchema = require('../models/age');

class AgeFacade extends Facade {}

module.exports = new AgeFacade(ageSchema);
