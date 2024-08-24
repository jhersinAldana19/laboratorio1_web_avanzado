const express = require('express');
const app = express();
const port = 3002;

app.use('/uploads', express.static(__dirname + '/uploads'));

const routes = require('./rutas.js');
app.use(routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


