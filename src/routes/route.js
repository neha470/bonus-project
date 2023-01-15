const express = require("express");
const router = express.Router();
const coinController=require("../controller/controller")

router.post("/postCoin",coinController.postCoin)    


module.exports = router;