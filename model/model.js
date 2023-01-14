const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      unique:true
    },
    name: {
      type: String,
      unique:true

    },
    marketCapUsd: Number,
    priceUsd: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("cryptocurrencyCoin", coinSchema);
