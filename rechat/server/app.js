// using third party package "express", work like the server.js 
// hosting a new server automatically with status code, set Header

const express = require('express');
const app = express();

// register view engine - just like other frameworks: React, Vue ...  
app.set('view engine', 'ejs'); // configure app setting
// this can tell express to look for the view template
// app.set('Location', 'fiel name');

app.listen(3000);

app.get('/', (req, res) => {
    // it should not be a relative path for express
    // __dirname will give the directory the file locates, "./" is a relative path
    
    // send html file to browser
    // res.sendFile('./views/index.html', {root: __dirname});

    // send ejs file to browser
    res.render('index');
});

app.get('/about', (req, res) => {
    // it should not be a relative path for express
    // __dirname will give the directory the file locates, "./" is a relative path
    // res.sendFile('./views/index.html', {root: __dirname});

    // send ejs file to browser
    res.render('about');
});

// redirects
app.get('/index', (req, res) => {
    res.redirect('/'); 
})

// 404 page
app.use((req, res) => {
    // res.sendFile('./views/404.html', {root: __dirname});

    // send ejs file to browser
    res.render('404');
})