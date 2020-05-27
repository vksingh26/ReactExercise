import express from 'express';
import fs from 'fs';
import path from 'path';
import { StaticRouter } from 'react-router-dom';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from '../src/App';
const PORT = 9000;
const app = express();
const context = {};
  

app.use('^/$', (req, res, next) => {
    const appN = ReactDomServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
    );
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if(err){
            console.log(err);
            return res.status(500).send('Something went wrong!!!');
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${appN}</div>`));
    })
});

app.use(express.static(path.resolve(__dirname, '..', 'build')))
app.listen(PORT, ()=> { 
    console.log(`React App launched using SSR on ${PORT}`)
})

