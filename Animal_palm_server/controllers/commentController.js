module.exports ={
    comment: (req,res)=>{
        return res.send('comment')
    },
    writecomment:(req,res)=>{
        return res.send("writecomment")
    },
    commentDelete:(req,res)=>{
        return res.send("commentDelete")
    }
}