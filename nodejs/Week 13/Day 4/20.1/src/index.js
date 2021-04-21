const express = require('express');
require('./db/mongoose');
const productRouter = require('./routers/product');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(productRouter);

app.listen(port, () => console.log('Server is up on PORT ' + port));