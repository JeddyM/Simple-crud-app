//Retrive data-READ
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Retrive data per id- READ

app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message:error.message})
  }
});

//Create data- CREATE

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update- UPDATE
app.put('/api/product/:id', async(req, res) => {
  try {
    const {id} = req.params
    
    const product = await Product.findByIdAndUpdate(id, req.body)

    if(!product){
      res.status(404).json({message:'Product not found'})
    }

    const updatedProduct = await Product.findById(id)
    res.status(200).json(updatedProduct)

  } catch (error) {
    res.send(500).json({message:error.message})
  }

})

//DELETE

app.delete('/api/product/:id', async (req, res) => {

  try {
    const {id} = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product){
      return res.status(404).json({message:'Product not found'})
    }

    res.status(200).json({message:'Product deleted succesfully'})

  } catch (error) {
    res.send(500).json({message:error.message})
  }
})
