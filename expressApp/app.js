const express = require('express');

// ? express app
const app = express();

// ? listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.setHeader("Content-type", "text/html");
    // don't need to set content-type because res.send() auto set depend on the content we have, also status code
    // not need to write classic way
    // res.write(data));
    // res.end();

    // console.log('__dirname', __dirname);
    // console.log('__filename', __filename);
    // res.send('<h1>sandeep saini</h1>')
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});
app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', { root: __dirname });
});

// ? redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about')
});

// ? 404 not found
// it should be bottom of the page because file check all the route is if it does't match for any then last one .use() called
// in another words, if noting matches this will fire
app.use((req, res) => {
    // it will not send an error code so we chained .status()
    // res.sendFile('./views/404.html', { root: __dirname });
    res.status(400).sendFile('./views/404.html', { root: __dirname });
})