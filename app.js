const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const tasks = task = ["buy milk", "learn javascript", "learn express"];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

const complete = ["finish learning nodejs"];
app.post("/removetask", function (req, res) {
    let completeTask = req.body.check;
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (let i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});

app.get('/', function (req, res) {
    res.render('index', { tasks: tasks, complete: complete });
});

app.post('/addtask', function (req, res) {

    if(req.body.newtask.length > 0) {
        const newTask = req.body.newtask;
        console.log(req.body)
        tasks.push(newTask);
    }

        res.redirect('/');
});

app.listen(8080, function () {
    console.log('Running on port 8080!');
});