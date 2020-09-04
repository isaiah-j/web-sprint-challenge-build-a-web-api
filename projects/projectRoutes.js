const express = require('express')
const mw = require('./projectMiddleware')
const router = express.Router()


const projectController = require('./projectController')

router
    .route('/')
    .get(projectController.getAllProjects)
    .post(mw.validateProject, projectController.postProject)

router
    .route('/:id')
    .get(mw.validateProjectId, projectController.getProject)
    .patch(mw.validateProjectId, mw.validateProject, projectController.updateProject)
    .delete(projectController.deleteProject)

module.exports = router