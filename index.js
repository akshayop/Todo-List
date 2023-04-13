const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const Todo = require('./models/todolist')

const app = express();


// Setting up view engine
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded());

app.use(express.static('assets'));

// home page 
app.get('/', (req, res) => {
    Todo.find({}).then( (tasks) => {
        return res.render('home', {
            title: 'Todo list',
            todo_list: tasks
        })
    }).catch( (err) => {
        console.log("Error while loading the data", err);
    });
});



// Adding data to back end

app.post('/add-tasks', (req, res) => {
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }).then( (newTasks) => {
        console.log("Data:", newTasks);
        return res.redirect('back');
    }).catch ( (err) => {
        console.log("error while adding data to db", err);
    })
});

// Hosting server 

app.listen(port, (err) => {
    if(err) {
        console.log("error", err);
        return;
    }

    console.log(`server is up and successfully running on port ${port}`);
});