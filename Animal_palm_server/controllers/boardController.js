module.exports ={
    context: (req,res)=>{
        return res.send('context')
    },
    writecontext:(req,res)=>{
        return res.send("writecontext")
    },
    contextDelete:(req,res)=>{
        return res.send("contextDelete")
    }
}