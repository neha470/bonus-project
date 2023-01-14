const coinmodel = require("../model/model");
const axios = require("axios");

const getCoin = async (req, res) => {
  res.setHeader("Authorization", "Bearer 1fcde70f-a88e-40fb-9950-ac193f6af3cf");

  axios.get("https://api.coincap.io/v2/assets")
  .then(async (response)=>{ 
    
    let data=response.data.data
   const sortvalue = data.sort((a, b) => {
        return a.changePercent24Hr - b.changePercent24Hr;
        });
        const delteData=await coinmodel.deleteMany()
        const createData = await coinmodel.create(sortvalue);
        res.send({ msg: createData });
  })
  .catch((err)=>{
    console.log(err.message)
    res.status(400).send({msg:err.message})
  })

};

module.exports.postCoin = getCoin;

// - for inserting the documents, use findOneAndUpdate with upsert=true..this will create a new document in case there is no entry or will update the old doc with new values when there is an entry already there
//Now the assignment is to create an API that does the following ( one single API and not multiple separate API’s)

// Get the list of all the top 100 cryptocurrency coins in the world using the /assets api ( the first api mentioned in the documentation)
