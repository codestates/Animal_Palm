const express = require('express');
const https = require("http")
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser");

//const controllers = require("./controllers")

const boardRouter = require("./router/boardRouter")
const commentRouter = require("./router/commentRouter")
const mypagesRouter = require("./router/mypagesRouter")


app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use('/:id',boardRouter)
app.get('/',(req,res,next)=>{
  res.send("main") 
})
// app.use(
//   cors({
//     origin:["http://localhost:3000"],
//     credentials : true,
//     methods:["GET","POST","OPTIONS"],
//   })
// )
app.use(cookieParser())

const HTTP_PORT = process.env.HTTP_PORT || 4000

app.listen(HTTP_PORT, () => {
  console.log(`[RUN] StatesAirline Server... | http://localhost:${HTTP_PORT}`);
});


module.exports = app;
