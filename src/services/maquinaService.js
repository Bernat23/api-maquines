const { v4: uuid } = require("uuid");
const Maquina = require("../database/Maquina");


const getAllMaquines = (filterParams) => {
    try {
      const allMaquines = Maquina.getAllMaquines(filterParams);
      return allMaquines;
    } catch (error) {
      throw error;
    }
  };
  
  const getOneMaquina = (maquinaId) => {
    try {
      const maquina = Maquina.getOneMaquina(maquinaId);
      return maquina;
    } catch (error) {
      throw error;
    }
  };
  /*
  const createNewMaquina = (nouMaquina) => {
    const maquinaToInsert = {
      ...nouMaquina,
      id: uuid(),
      createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
      const createdMaquina = Maquina.createNewMaquina(maquinaToInsert);
      return createdMaquina;
    } catch (error) {
      throw error;
    }
  };*/

  module.exports = {
    getAllMaquines,
    getOneMaquina,
    //createNewMaquina,
};
  