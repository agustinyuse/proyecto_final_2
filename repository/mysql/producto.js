const connection = require("./connection");
const knex = require("knex")(connection);

class Producto {
  constructor() {
    this.createTable();
  }

  createTable = async () => {
    try {
      const exists = await knex.schema.hasTable("productos");

      if (!exists) {
        knex.schema
          .createTable("productos", (table) => {
            table.increments("id");
            table.string("nombre");
            table.string("descripcion");
            table.string("codigo");
            table.integer("precio");
            table.integer("stock");
            table.string("foto");
            table.timestamp("timestamp").defaultTo(knex.fn.now());
          })
          .then(() => {
            console.log("tabla productos creada!");
          })
          .catch((error) => {
            console.log("error:", error);
            throw error;
          });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  create = (product) => {
    return new Promise((resolve) => {
      knex("productos")
        .insert(product)
        .then(() => {
          console.log("Producto agregado a la tabla");
          resolve();
        })
        .catch((error) => {
          console.log("error:", error);
          resolve();
        });
    });
  };

  update = (id, producto) => {
    return new Promise((resolve) => {
      knex
        .from("productos")
        .where("id", id)
        .update(
          { nombre: producto.nombre },
          { descripcion: producto.descripcion },
          { codigo: producto.codigo },
          { precio: producto.precio },
          { stock: producto.stock },
          { foto: producto.foto }
        )
        .then(() => {
          console.log("producto actualizado");
          resolve();
        })
        .catch((error) => {
          console.log("error:", error);
          resolve();
        });
    });
  };

  delete = (id) => {
    return new Promise((resolve) => {
      knex
        .from("productos")
        .where("id", id)
        .del()
        .then(() => {
          console.log("producto eliminado");
          resolve();
        })
        .catch((error) => {
          console.log("error:", error);
          resolve();
        });
    });
  };

  findAll = () => {
    return new Promise((resolve) => {
      knex
        .from("productos")
        .select("*")
        .then((rows) => {
          const products = Object.values(JSON.parse(JSON.stringify(rows)));
          resolve(products);
        })
        .catch((error) => {
          console.log("error:", error);
          resolve();
        });
    });
  };

  findById = (id) => {
    return new Promise((resolve) => {
      knex
        .from("productos")
        .select("*")
        .where("id", id)
        .then((rows) => {
          resolve(Object.values(JSON.parse(JSON.stringify(rows))));
        })
        .catch((error) => {
          console.log("error:", error);
          resolve();
        });
    });
  };
}

module.exports = new Producto();
