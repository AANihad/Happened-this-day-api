const user = require ("../models/user");
module.exports ={
    createUser: async (req,res)=>{
        const {email, username, firstName, lastName,password}= req.body;
        try{
            const u = await user.create({email, username, firstName, lastName,password});
             res.json(u);
        } catch (e){
             res.json({error: e.message});
        }
    },
    
    updateUser: async(req,res)=>{
        const {firstName,lastName,password}=req.body,
        id =req.params.id;
        try{
            const u=await user.findById(id);
            u.firtName=firstName ? firstName : u.firstName;
            u.lastName = lastName ? lastName : u.lastName;
            u.password = password ? password : u.password;
            await u.save();
            res.send(u);
        }catch(e){
            res.json({error: e.message});
        }
    },
};
