db.voos.remove({ $and: [{ "empresa.nome": "AZUL" }, { litrosCombustivel: { $lt: 400 } }] });
