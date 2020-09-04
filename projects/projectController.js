
const Project = require('../data/helpers/projectModel')
const AppError = require('../utils/appError')
const dbConfig = require('../data/dbConfig')

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.get()
        res.status(200).json({
            status: 200,
            results: projects.length,
            payload: {
                projects
            }
        })
    } catch (error) {
        res.send('err')

    }
}

exports.postProject = async (req, res, next) => {
    try {
        let result = await Project.insert(req.body)
        res.status(200).json({
            status: 200,
            message: "Successfully created project",
            payload: {
                result
            }
        })
    } catch (error) {
        next(new AppError("Unable to create project", 500))
    }
}

exports.getProject = async (req, res) => {
    const { id } = req.params

    try {
        let project = await Project.get(id)
        res.status(200).json({
            status: 200,
            payload:{
                project
            }
        })
    } catch (error) {
        next(new AppError("Unable to retrieve project", 500))
    }

}

exports.updateProject = async (req, res, next) => {
    const {name, description} = req.body
    next()
}

exports.deleteProject = (req, res) => {
    res.send('delete project')
}