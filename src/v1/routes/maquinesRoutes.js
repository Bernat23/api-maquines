const express = require("express");

const maquinaController = require("../../controllers/maquinaController");
const calaixController = require("../../controllers/calaixController");

const router = express.Router();

router
  .get("/", maquinaController.getAllMaquines)
  .get("/:maquinaId", maquinaController.getOneMaquina)
  //.get("/:maquinaId/estocs", estocController.getEstocForMaquina);
  .get("/:maquinaId/calaixos", calaixController.getCalaixosForMaquina)
  
module.exports = router;
