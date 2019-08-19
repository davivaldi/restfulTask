const Task = require("../models/task.models");

exports.index = function(req,res) {
    Task.find()
    .then(task => res.json(task) )
    .catch(err => res.json(err));
}

exports.getTask = function(req,res) {
    Task.findOne({_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err)); 
}

exports.createTask = function(req,res) {
    console.log(req.params);
    const task = new Task();
    task.title = req.body.title;
    task.description = req.body.description;
    task
    .save()
    .then(NewTask => res.json({message: "Success", task: NewTask}))
    .catch(err =>res.json(err));    
}

exports.deleteOne = function(req,res) {
    console.log("i Made it to the destruction");
    Task.remove({_id: req.params._id})
    .then(data => res.json(data))
    .catch(err => res.json(err));  
}

exports.updateOne = function(req,res) {
    console.log("i made it momma");
    Rhino.updateOne({_id: req.params._id}, {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
         
    } )
        .then(data => res.json(data))
        .catch(err => res.json(err));
}