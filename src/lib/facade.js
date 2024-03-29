class Facade {
  constructor(Schema) {
    this.Schema = Schema;
  }

  create(body) {
    console.log(body);
    const schema = new this.Schema(body);
    return schema.save();
  }

  find(...args) {
    return this.Schema
      .find(...args)
      .exec();
  }

  findOne(...args) {
    return this.Schema
      .findOne(...args)
      .exec();
  }

  findById(...args) {
    return this.Schema
      .findById(...args)
      .exec();
  }

  update(...args) {
    return this.Schema
      .update(...args)
      .exec();
  }

  remove(...args) {
    return this.Schema
      .remove(...args)
      .exec();
  }

  insertMany(...args){
    console.log(args[0]);
    return this.Schema
        .insertMany(...args);
  }

}

module.exports = Facade;
