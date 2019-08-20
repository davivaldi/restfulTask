module.exports = function(app) {
    const task = require('../controllers/task.controller');
   
    app.get("/api/tasks", task.index)

    app.get("/api/task/:_id", task.getTask)
    
    app.post("/api/task", task.createTask)
    
    app.put("/api/task/:_id", task.updateOne)

    app.delete("/api/task/:_id", task.deleteOne)
}