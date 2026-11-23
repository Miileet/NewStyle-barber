const router = require("express").Router();

const servicioController = require("../controllers/servicioController");

router.get("/", servicioController.listar);

module.exports = router;
