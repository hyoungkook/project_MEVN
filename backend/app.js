const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// creat out express app
const app = express()

// handle CORS + middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// database stuff
const uri = "mongodb+srv://hyoungkook:khk1988!@cluster0.eyrbcse.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => {
  console.log("MongoDB connected")
})
.catch(err => console.log(err))

app.use(bodyParser.json())

// routes
app.get("/", (res, req) => {
    res.send("yay home page")
})

// 임시로 오류를 없애기 위해서 주석처리 했었음 (이것때문에 오류나고 있음)
const TodosRoute = require('./routes/todos');
app.use('/todos', TodosRoute)

// start server
app.listen(3000, () => {
    console.log("Listening at port 3000")
})



