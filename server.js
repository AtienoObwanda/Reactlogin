const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')
// Config dotev
require('dotenv').config({
    path: './config/config.env'
})


const app = express()
//app.use(cors());

// Dev Logginf Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
}

// Connect to database
connectDB();

// body parser
//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Load routes
const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.route')



// Use Routes
app.use('/api', authRouter)
app.use('/api', userRouter)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})
app.use((req, res) => {
    res.status(400).json({
        success: false,
        msg: "Try again!"
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});