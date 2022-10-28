const v1 = db.voos.count({
  "empresa.nome": "PASSAREDO",
  natureza: "Doméstica",
});

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: v1,
});

db.resumoVoos.findOne({
},
{
  _id: 0,
});
