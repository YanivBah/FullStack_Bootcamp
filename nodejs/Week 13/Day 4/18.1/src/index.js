const express = require('express');
require('./db/mongoose');
const Product = require('./models/product');
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;

app.get('/products', async(req,res) => {
  const { id, active} = req.query;
  if (!id) {
    if (active) {
      let state;
      active.toLowerCase() === 'true' ? state = true : '';
      active.toLowerCase() === 'false' ? state = false : '';
      if (state == undefined) return res.status(400).send('You need to enter true/false in the active query');
      const products = await Product.find({ isActive: state });
      return res.send(products);
    }
    const products = await Product.find({});
    return res.send(products);
  }
  const product = await Product.findById(id);
  return res.send(product);
});

app.get('/products/range', async(req,res) => {
  const { min, max} = req.query;
  if (isNaN(min) || isNaN(max)) return res.status(400).send({error: 'min or max is not a number.'})
  
  let products;
  // When there is only min
  if (min && !max) {products = await Product.find( {"details.price": { $gt: Number(min)}} );} 
  // When there is only max
  else if (!min && max) {products = await Product.find({ "details.price": { $lt: Number(max) } });}
  // When both included
  else if (min && max) {products = await Product.find({ "details.price": { $gt: Number(min),$lt: Number(max) } });}
  res.send(products);
});

app.post('/products/new', async(req, res) => {
  console.log(req.body);
  const bufferImgs = [];
  req.body.details.images.forEach(img => bufferImgs.push(Buffer.from(img)));
  req.body.details.images = bufferImgs;
  console.log(req.body);
  const product = new Product(req.body);
  product.save()
             .then(product => res.send(product))
             .catch(err => res.send({ error: err }));
})

app.listen(port, () => console.log('Server is up on PORT ' + port));