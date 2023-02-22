const calaixService = require("../services/estocService");

const getEstocForProducte = (req, res) => {
    const {
      query: { disponible },
    } = req.query
    const {
      params: { producteId },
    } = req;
  
    if (!producteId) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Parameter ':producteId' can not be empty" },
      });
      return;
    }
  
    try {
      const producte = estocService.getEstocForProducte(producteId, {disponible});
      res.send({ status: "OK", data: producte });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };