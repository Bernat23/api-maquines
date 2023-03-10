const maquinaService = require("../services/maquinaService");

const getAllMaquines = (req, res) => {
    const {  } = req.query;
    try {
        const allMaquina = maquinaService.getAllMaquines({  });
        res.send({ status: "OK", data: allMaquina });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getOneMaquina = (req, res) => {
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
        const maquina = maquinaService.getOneMaquina(maquinaId);
        res.send({ status: "OK", data: maquina });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = { 
    getAllMaquines,
    getOneMaquina
};
