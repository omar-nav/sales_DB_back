var mongoose = require('mongoose');

var SaleSchema = new mongoose.Schema({
  mes: String,
  año: String,
  vendedor: String,
  monto: String,
  cantidad: String,
  // inputs data type received as text
  // can be manipulated later
  equipo: String,
  alcadia: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Sale', SaleSchema);
