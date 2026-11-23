const router = require("express").Router();

const horarioController = require("../controllers/horarioController");

router.get("/", horarioController.listar);

module.exports = router;
