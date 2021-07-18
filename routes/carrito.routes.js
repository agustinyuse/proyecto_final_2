const express = require("express");
const router = express.Router();

const controller = require("../api/carrito");

router.get("/listar", async (req, res) => {
  try {
    const objs = await controller.findAll();

    res.status(200).json(objs);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.get("/listar/:id", async (req, res) => {
  try {
    const objs = await controller.findById(req.params.id);

    res.status(200).json(objs);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.post("/guardar", async (req, res) => {
  try {
    await controller.create(req.body);

    return res.status(200).json({ message: "carrito guardado" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.delete("/borrar/:id", async (req, res) => {
  try {
    await controller.delete(req.params.id);

    return res.status(200).json({ message: "carrito borrado" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;
