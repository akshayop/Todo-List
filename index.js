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
    let data = req.body.date;
    if(data == "") {
        data = "No Deadline";
    }

    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: data
    }).then( (newTasks) => {
        console.log("Data:", newTasks);
        return res.redirect('back');
    }).catch ( (err) => {
        console.log("error while adding data to db", err);
    })
});

// deleting the list
app.get('/delete-tasks', (req, res) => {
    console.log(req.query);
    //  get the id from the query

    let id = req.query;

    // loop to check how much tasks should be deleted
    let count = Object.keys(id).length;
    for(let i = 0; i < count; i++) {
        // find the tasks in the db using id and  deleting it 
        // Todo.findByIdAndDelete(Object.keys(id)[i])
        //     .then(() => {
        //         console.log("deleted");
                
        //     }).catch( (err) => {
        //         console.log("error while deleting the data from db", err);
        //     }); 
        deleteTodo(i);
    }

    function deleteTodo(i) {
        // find the tasks in the db using id and  deleting it 
        Todo.findByIdAndDelete(Object.keys(id)[i])
            .then(() => {
                console.log("deleted");
                
            }).catch( (err) => {
                console.log("error while deleting the data from db", err);
            });
    }

    setTimeout(function() {
        return res.redirect('back');
    }, 1000);

   
    
});

// Hosting server 

app.listen(port, (err) => {
    if(err) {
        console.log("error", err);
        return;
    }

    console.log(`server is up and successfully running on port ${port}`);
});