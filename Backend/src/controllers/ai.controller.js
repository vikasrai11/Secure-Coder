const aiservice= require("../services/ai.service");

module.exports.getreview= async(req,res)=>{
    const code=req.body.code;

    if(!code){
        return res.status(400).send("Code is required");
    }
    const response=await aiservice(code);

    res.send(response);
}