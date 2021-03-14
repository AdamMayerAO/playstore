const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(morgan('common')); 
const apps = require('./playStore-data.js');
app.get('/apps', (req, res) => {
    const {sort, genre} = req.query;
    if (sort) {
        if (!['Rating', 'App'].includes(sort)){
            return res 
                .status(400)
                .send('Sort by Rating or App Name');
        }
    }
    if(genre){
        if(!['Action', 'Puzzle', 'Strategy', 'Casual','Arcade','Card'].includes(genre)){
            return res
                .status(400)
                .send('Genre must be one of the following: Action, Puzzle, Strategy, Casual, Arcade, or Card')
        }
    }

    let resuts = apps.map(app =>
        app.App.toUpperCase()
        );

    results = apps.filter(app=>
            app
             .Genres
             .includes(genre));    
        
    
    if (sort) {
        results.sort((a,b) => {
            return a[sort] > b[sort]? 1: a[sort] < b[sort]? -1: 0;
        });
    }


    res
    .json(results);
});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});