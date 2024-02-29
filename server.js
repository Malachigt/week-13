const express = require('express');
const app = express();
app.get('/greeting' , (req, res) => {
res.send("hello, stranger");
})
app.get("/greeting/:name",(req, res) => {
res.send(`Hello, `+ req.params.name);
})
app.get("/tip/:total/:tipPercentage",(req,res) => {
    const total = parseFloat(req.params.total)
    const percent = parseFloat(req.params.tipPercentage)
    const result = total*percent/100
    res.send(result.toString());;
});


app.listen(3000);

