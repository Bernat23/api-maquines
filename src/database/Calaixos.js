const DB = require("./db.json");

const getCalaixosForMaquina = (maquinaId, filterParams) => {
    try {
      const calaix = DB.calaix.filter((calaix) => calaix.producte === maquinaId);
      if (!calaix) {
        throw {
          status: 400,
          message: `Can't find estoc with the id '${maquinaId}'`,
        };
      }
      if (filterParams.buits) {
        const filteredEstoc = DB.estoc.filter((estoc) => {
          if(!estoc.data_venda) {
            return true;
          }
          const caducitatDate = new Date(estoc.caducitat);
          const filterDate = new Date();
          caducitatDate.setHours(0, 0, 0, 0);
          filterDate.setHours(0, 0, 0, 0); 
          return caducitatDate.getTime() < filterDate.getTime() && estoc.producte == producteId;
        });
        return filteredCalaix;
      }
  
      return estoc;
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
  };

  module.exports = {
    getCalaixosForMaquina,
  }