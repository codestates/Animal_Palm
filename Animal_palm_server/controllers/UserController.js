module.exports ={
  signin: (req,res)=>{
    return res.send('signin')
  },
  signup:(req,res)=>{
    return res.send("signup")
  },
  signout:(req,res)=>{
    return res.send("signout")
  },
  userDelete:(req,res)=>{
    return res.send("userDelete")
  }

}