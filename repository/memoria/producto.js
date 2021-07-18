class Producto {
  constructor() {
    this.productos = [];
  }

  create = async (entitie) => {
    entitie.id = String(this.productos.length + 1);
    this.productos.push(entitie);
  };

  update = async (id, entitie) => {
    try {
      const index = this.productos.findIndex((p) => p.id === id);
      const last = this.productos[index];
      entitie.id = last.id;

      this.productos[index] = entitie;
    } catch (err) {
      console.error(err.message);
    }
  };

  delete = async (id) => {
    try {
      const index = this.productos.findIndex((p) => p.id === id);
      this.productos.splice(index, 1);
    } catch (err) {
      console.error(err.message);
    }
  };

  findAll = async () => {
    return this.productos;
  };

  findById = async (id) => {
    return this.productos.filter((p) => p.id === id);
  };
}

module.exports = new Producto();
