const coinmodel = require("../model/model");
const axios = require("axios");

const getCoin = async (req, res) => {
  

  axios.get("https://api.coincap.io/v2/assets")
  .then(async (response)=>{ 
    
    let data=response.data.data
   const sortvalue = data.sort((a, b) => {
        return a.changePercent24Hr - b.changePercent24Hr;
        });
        // const delteData=await coinmodel.deleteMany()
        const createData = await coinmodel.create(sortvalue);
        res.status(201).send({ msg: createData });
  })
  .catch((err)=>{
    console.log(err.message)
    res.status(400).send({msg:err.message})
  })

};

module.exports.postCoin = getCoin;

