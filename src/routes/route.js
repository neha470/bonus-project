const express = require("express");
const router = express.Router();
const coinController=require("../controller/controller")

router.post("/postCoin",coinController.postCoin)

// Get the list of all the top 100 cryptocurrency coins in the world using the /assets api ( the first api mentioned in the documentation)





module.exports = router;