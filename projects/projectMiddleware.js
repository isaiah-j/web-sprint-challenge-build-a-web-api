const AppError = require('../utils/appError')

const Project = require('../data/helpers/projectModel')

function isEmptyObject(obj) {
    return JSON.stringify(obj) == "{}"
}


exports.validateProject = async (req, res, next) => {
    if (isEmptyObject(req.body)) return next(new AppError("Missing required fields", 400))

    if (!req.body.name || !req.body.description) return next(new AppError("Missing required fields", 400))
    next()
}

exports.validateProjectId = async (req, res, next) => {
    const { id } = req.params
    try {
        let result = await Project.get(id)
        if (!result) return next(new AppError(`Unable to find project with id of ${id}`, 404))
        next()
    } catch (error) {
        return next(new AppError("Internal Server Error", 500))
    }
}