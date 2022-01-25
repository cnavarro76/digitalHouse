const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const path = require('path');

const port = process.env.PORT || 3000;

/** Add static files */

app.use(express.static(path.join(__dirname, 'public')));


/** Require routers */
const mainRouters = require('./routers/mainRouter');

app.use('/', mainRouters);

app.listen(port,() => {
    console.log(`Servidor corriendo en puerto ${port}`);    
});



