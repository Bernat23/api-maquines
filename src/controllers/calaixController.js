const calaixService = require("../services/calaixService");

const getCalaixosForMaquina = (req, res) => {
    const {
      params: { maquinaId },
    } = req;
  
    if (!maquinaId) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Parameter ':maquinaId' can not be empty" },
      });
      return;
    }
  
    try {
      const maquina = calaixService.getCalaixosForMaquina(maquinaId, {buits});
      res.send({ status: "OK", data: maquina });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };

  module.exports = {
    getCalaixosForMaquina,
    };
