const express = require("express");
const bodyParser = require("body-parser");


const port = 3000;

const app = express(); 

app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );


const {
    read,
    create,
    update,
    destroy 
} = require("./controllers/messages_controllers");

app.post('/api/messages', create);
app.get('/api/messages', read);
app.put('/api/messages/:id', update);
app.delete('/api/messages/:id', destroy);

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});