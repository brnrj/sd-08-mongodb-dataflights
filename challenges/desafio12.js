// Retorne a quantidade de documentos em que o campo aeroportoDestino.pais seja igual a BRASIL, ARGENTINA ou CHILE.
db.voos.countDocuments({ "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] } });
