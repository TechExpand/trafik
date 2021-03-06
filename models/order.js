const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    vendor: String,
    description: String,
    deliverylocation: String,
    nearestbusstop: String,
    phone: String
  });
  
  const Order = mongoose.model('order', OrderSchema);

  module.exports = Order;
