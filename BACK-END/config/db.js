const mongoose = require("mongoose");
const { ServerApiVersion } = require("mongodb");
const { DB_URI } = require(".");

const uri =
  DB_URI;

const db = async () => {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas:", error);
  }
};

module.exports = db;
