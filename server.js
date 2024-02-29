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

app.get("/magic/:question",(req, res)=>{

    const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const response = answers[Math.floor(Math.random()*answers.length)];
    res.send(req.params.question + '<h1>' + response + '</h1>' );
  
})
app.listen(3000);

