const express = require('express');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('assets'));

app.get('/', (req, res) => {
    
});

// Hosting server 

app.listen(port, (err) => {
    if(err) {
        console.log("error", err);
        return;
    }

    console.log(`server is up and successfully running on port ${port}`);
});