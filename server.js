require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = process.env.PORT
console.log(port)
const app = express()

const routerApi = require('./app/routes/api')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.use('/api/v1', routerApi)

app.get('/', (req, res) => {
    res.status(200).json({ message: "Api superapp berhasil jalan", code: 200 })
})

app.use((req, res, next) => {
    // catch 404 and forward to error handler
    const err = new Error("Resource Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    let message = err.message || "Internal Server Error";

    if (statusCode === 500) message = "Internal Server Error";

    return res.status(statusCode).json({ message: message })
})

app.listen(port, () => { console.log(`server running on http://localhost:${port}`) })