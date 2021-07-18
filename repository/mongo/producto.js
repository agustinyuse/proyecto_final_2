const model = require("../../models/producto");

class Producto {
  constructor() {}

  create = async (entitie) => {
    try {
      return await model.create(entitie);
    } catch (err) {
      console.error(err.message);
    }
  };

  update = async (id, entitie) => {
    try {
      return await model.findByIdAndUpdate(id, entitie);
    } catch (err) {
      console.error(err.message);
    }
  };

  delete = async (id) => {
    try {
      return await model.findByIdAndDelete(id);
    } catch (err) {
      console.error(err.message);
    }
  };

  findAll = async () => {
    try {
      return await model.find({});
    } catch (err) {
      console.error(err.message);
    }
  };

  findById = async (id) => {
    try {
      return await model.findById(id);
    } catch (err) {
      console.error(err.message);
    }
  };
}

module.exports = new Producto();
