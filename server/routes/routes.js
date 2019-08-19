module.exports = function(app) {
    const task = require('../controllers/task.controller');
   
    app.get("/api/tasks", task.index)

    app.get("/api/task/:id", task.getTask)
    
    app.post("/api/task", task.createTask)
    
    app.get("/api/task/:id", task.updateOne)

    app.get("/api/task/:id", task.deleteOne)
}