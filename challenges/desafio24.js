db.voos.find({ $and: [{ litrosCombustivel: { $lte: 600 } },
{ litrosCombustivel: { $exists: true } },
{ $nor: [{ "empresa.nome": "GOL" },
{ "empresa.nome": "AZUL" }] }] },
{ vooId: 1, litrosCombustivel: 1, "empresa.nome": 1, _id: 0 }).limit(1);