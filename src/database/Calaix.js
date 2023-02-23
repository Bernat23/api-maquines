const DB = require("./db.json");

const getCalaixosForMaquina = (maquinaId, filterParams) => {
    try {
      const calaix = DB.calaix.filter((calaix) => calaix.maquina === maquinaId);
      if (!calaix) {
        throw {
          status: 400,
          message: `Can't find maquina with the id '${maquinaId}'`,
        };
      }
      if (filterParams.buits) {
        
      }
  
      return maquina;
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
  };

  module.exports = {
    getCalaixosForMaquina,
  }