import express from "express";
import ProductsControllers from "../controllers/products.js";

const productsRouter = express.Router();
const productsControllers = new ProductsControllers();

productsRouter.get("/", async (req, res) => {
  const { body, success, statusCode } = await productsControllers.getProducts();

  res.status(statusCode).send({ body, success, statusCode });
});

productsRouter.post("/", async (req, res) => {
  const { body, success, statusCode } = await productsControllers.addProduct(
    req.body
  );

  res.status(statusCode).send({ body, success, statusCode });
});

productsRouter.delete("/:id", async (req, res) => {
  const { body, success, statusCode } = await productsControllers.deleteProduct(
    req.params.id
  );

  res.status(statusCode).send({ body, success, statusCode });
});

productsRouter.put("/:id", async (req, res) => {
  const { body, success, statusCode } = await productsControllers.updateProduct(
    req.params.id,
    req.body
  );

  res.status(statusCode).send({ body, success, statusCode });
});

productsRouter.get("/availables", async (req, res) => {
  const { body, success, statusCode } =
    await productsControllers.getAvailableProducts();

  res.status(statusCode).send({ body, success, statusCode });
});

export default productsRouter;
