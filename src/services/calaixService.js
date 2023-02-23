const Calaix = require("../database/Calaix")

const getCalaixosForMaquina = () => {
    try {
      const allCalaixos = Calaix.getCalaixosForMaquina;
      return allCalaixos;
    } catch (error) {
      throw error;
    }
  };

  module.exports = {
    getCalaixosForMaquina,
    };  