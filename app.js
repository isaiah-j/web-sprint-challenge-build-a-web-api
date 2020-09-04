const projectRouter = require('./projects/projectRoutes')
const express = require('express')

const app = express()

app.use(express.json())

app.use('/api/projects', projectRouter)



app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })

})


module.exports = app