const express = require('express')
consolidate = require ("consolidate"),
handlebars = require ("handlebars");
const app = express()

app.engine("hbs", consolidate.handlebars);

    app.set('views', './views');
    app.set('view engine', 'hbs');

app.get('/', (req, res) => res.send(''))

app.listen(3450, () => console.log(''))