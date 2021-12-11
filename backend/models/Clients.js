const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientsSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  birthday: {
    day: {
      type: Number,
    },
    month: {
      type: Number,
    },
    year: {
      type: Number,
    },
  },
  ssnorid: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },

});

module.exports = mongoose.model("Clients", clientsSchema);