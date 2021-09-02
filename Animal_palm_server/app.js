require('dotenv').config()
const express = require('express');
const https = require("http")
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser");

//const controllers = require("./controllers")

const boardRouter = require("./router/BoardRouter")
const commentRouter = require("./router/CommentRouter")
const mypagesRouter = require("./router/MypagesRouter")
const userRouter = require("./router/UserRouter")


app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors({
  origin : ['http://localhost:3000', process.env.REACT_APP_API_URL, ''],
  credentials : true,
}))
app.use('/boards',boardRouter)
app.use('/user',userRouter)
app.use('/comments',commentRouter)
app.use('/mypage',mypagesRouter)
app.use('/main',mypagesRouter)
app.get('/',(req,res,next)=>{
  res.send("main") 
})

app.use(cookieParser())

const HTTP_PORT = process.env.HTTP_PORT|| 4000

app.listen(HTTP_PORT, () => {
  console.log(`[RUN] Animal Palm Server... | http://localhost:${HTTP_PORT}`);
});


module.exports = app;
