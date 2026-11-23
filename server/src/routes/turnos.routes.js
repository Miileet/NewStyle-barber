const router = require("express").Router();

const turnoController = require("../controllers/turnoController");

router.get("/", turnoController.listar);

module.exports = router;
