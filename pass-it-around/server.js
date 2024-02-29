const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 99 bottles of beer on the wall
    // a link to take one down, pass it around (goes to /98)
    res.send('99 bottles of beer on the wall <a href="/98">take one down pass it around</a>')    

    
});

app.get('/:number_of_bottles', (req, res) => {
    const bottles = parseInt(req.params.number_of_bottles);
               if(bottles === 0) {
                   res.send('0 bottles of beer on the wall. <a href="/">Start over</a>');
               }  else {
                res.send(bottles.toString() + ' bottles of beer on the wall <a href="/' + (bottles - 1) + '">take one down pass it around</a>');
}});

app.listen(3001);