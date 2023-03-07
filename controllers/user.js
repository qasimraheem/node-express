const User = require("../models/user");
let users = ["ali", "fjdb vj"]
module.exports = {
 getUsers:async(req, res)=>{
   let users  = await User.find({});
   res.json({users})
 },
  create:async(req, res)=>{
   console.log("creating user")
    let user  = await User({
      ...req.body,
    });
    console.log("user:", user)
    await user.save();
    res.json({user})
  },
}