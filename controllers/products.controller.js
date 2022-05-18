// import model
const productModel = require("../models/productsModel");

const logger = require("../log");

module.exports = {

  //obtener todos los productos, ordernarlos y buscar por nombre
  get: async (req, res) => {
    const { orderBy, search } = req.query

    let products = [];
    let find = search ? { title: { $regex: search, $options: "i" } } : {};
    if (orderBy) {
      const ord = {};
      ord[orderBy] = 1;
      products = await productModel.find(find).sort(ord);
    } else {
      products = await productModel.find(find);
    }

    logger.info("Productos listados: " + products);
    res.status(200).send(products);
  },


  // obtener producto por id
  getById: async (req, res) => {
    const { id } = req.params;
    
    try {
      const getId = await productModel.findOne({_id: id});
      res.status(200).send(getId);
    } catch (error) {
      logger.error(error);
      res.status(500).send(error);
    }
  },


  // actualizar producto
  put: async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
      const update = await productModel.updateOne({ _id: id, }, { $set: body, });
      res.status(201).send(update);
    } catch (error) {
      logger.error(error);
      res.status(500).send(error);
    }
  },


  // crear producto
  post: async (req, res) => {
    const { body } = req;

    try {
      await productModel.create(body);
      res.status(201).redirect("/admin/products");
    } catch (error) {
      logger.error(error);
      res.status(500).send(error)
    }
  },


  // borrar producto
  deleteProd: async (req, res) => {
    const { id } = req.params;
    
    try {
      await productModel.deleteOne({ _id: id });
      res.status(200).send("Product deleted");
    } catch (err){
      logger.error("No id find" + err)
      res.status(500).send(err);
    }
  },


  // borrar todos los productos
  deleteAll: async (req, res) => {
    await productModel.deleteMany({});
    res.status(200).send("Se eliminaron todos los objetos");
  }
};
