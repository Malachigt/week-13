const express = require('express');
const app = express();
app.get('/greeting' , (req, res) => {
res.send("hello, stranger");
})
app.get("/greeting/:name",(req, res) => {
res.send(`Hello, `+ req.params.name);
})

app.listen(3000);

