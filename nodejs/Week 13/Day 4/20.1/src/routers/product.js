const express = require("express");
const router = new express.Router();
const Product = require('../models/product');

router.get("/products", async (req, res) => {
  const { id, active } = req.query;
  if (!id) {
    if (active) {
      let state;
      active.toLowerCase() === "true" ? (state = true) : "";
      active.toLowerCase() === "false" ? (state = false) : "";
      if (state == undefined)
        return res
          .status(400)
          .send("You need to enter true/false in the active query");
      const products = await Product.find({ isActive: state });
      return res.send(products);
    }
    const products = await Product.find({});
    return res.send(products);
  }
  const product = await Product.findById(id);
  return res.send(product);
});

router.get("/products/range", async (req, res) => {
  const { min, max } = req.query;
  if (isNaN(min) || isNaN(max))
    return res.status(400).send({ error: "min or max is not a number." });

  let products;
  // When there is only min
  if (min && !max) {
    products = await Product.find({ "details.price": { $gt: Number(min) } });
  }
  // When there is only max
  else if (!min && max) {
    products = await Product.find({ "details.price": { $lt: Number(max) } });
  }
  // When both included
  else if (min && max) {
    products = await Product.find({
      "details.price": { $gt: Number(min), $lt: Number(max) },
    });
  }
  res.send(products);
});

router.post("/products/new", async (req, res) => {
  console.log(req.body);
  const bufferImgs = [];
  req.body.details.images.forEach((img) => bufferImgs.push(Buffer.from(img)));
  req.body.details.images = bufferImgs;
  console.log(req.body);
  const product = new Product(req.body);
  product
    .save()
    .then((product) => res.send(product))
    .catch((err) => res.send({ error: err }));
});

router.patch("/products/:id", async (req,res) => {
  const {id} = req.params;
  const updates = Object.keys(req.body);
  const allowedUpdated = ['isActive', 'discount'];
  const isValid = updates.every((update) => allowedUpdated.includes(update));
  if (!isValid) return res.status(400).send({error: 'You can only update active or discount.'});
  return await Product.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
  .then((product => { return res.send(product) }))
  .catch(err => { return res.status(404).send(err) });
})

router.delete("/products/deleteall", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.deleteMany({});
    return res.send(product);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.delete("/products/:id", async (req,res) => {
  const {id} = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).send({error: `Didn't find product with this id`});
    return res.send(product);
  } catch(err) {
    console.log(err);
    res.status(400).send(err);
  }
})

module.exports = router;