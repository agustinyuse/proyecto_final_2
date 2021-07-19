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

  findAll = async (params) => {
    try {
      let conditions = {};

      if (params.nombre) {
        conditions["nombre"] = params.nombre;
      }

      if (params.codigo) {
        conditions["codigo"] = params.codigo;
      }

      if (params.startPrecio && params.endPrecio) {
        let range = {};

        range["$gt"] = params.startPrecio;
        range["$lt"] = params.endPrecio;

        conditions["precio"] = range;
      }

      if (params.startStock && params.endStock) {
        let range = {};

        range["$gt"] = params.startStock;
        range["$lt"] = params.endStock;

        conditions["stock"] = range;
      }

      return await model.find(conditions);
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
