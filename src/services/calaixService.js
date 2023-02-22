const Calaixos = require("../database/Calaixos")

const getCalaixosForMaquina = () => {
    try {
      const allCalaixos = Calaixos.getCalaixosForMaquina;
      return allCalaixos;
    } catch (error) {
      throw error;
    }
  };

  module.exports = {
    getCalaixosForMaquina,
    };  