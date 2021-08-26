module.exports ={
    context: (req,res)=>{
        res.send('context')
    },
    writecontext:(req,res)=>{
        res.send("writecontext")
    },
    contextDelete:(req,res)=>{
        res.send("contextDelete")
    }
}