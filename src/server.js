const app = require('./app');

app.listen(
    process.env.NODE_PORT || 3333, 
    console.log(`Server started on port ${process.env.NODE_PORT || 3333}`)
);