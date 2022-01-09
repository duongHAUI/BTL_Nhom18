require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.use(express.json());

// connect db
const db = require('./config/db')
db.connect()
// cookie-parser
app.use(cookieParser())
app.use(session({
    key : "user",
    secret : "adq21wda",
    resave : false,
    saveUninitialized : false,
    cookie : {
        expires : 60*60*24,
    }
}))

// public img
app.use("/public", express.static(path.join(__dirname, "uploads")));
// cors
app.use(cors({
    origin: "http://localhost:3000",
    methods : ["GET","POST","PUT","DELETE"],
    credentials : true
}));

// routers 
const routes = require('./routes/index');
routes(app);

app.listen(PORT, () => {
    console.log(`running server : http://localhost:${PORT}`);
})