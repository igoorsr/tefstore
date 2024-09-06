import ProductsDataAcess from "../dataAcess/products.js";
import { ok, serverError } from "../helpers/httpResponse.js";

export default class ProductsControllers {
  constructor() {
    this.dataAcess = new ProductsDataAcess();
  }

  async getProducts() {
    try {
      const products = await this.dataAcess.getProducts();

      return ok(products);
    } catch (error) {
      return serverError(error);
    }
  }

  async getAvailableProducts() {
    try {
      const products = await this.dataAcess.getAvailableProducts();

      return ok(products);
    } catch (error) {
      return serverError(error);
    }
  }

  async deleteProduct(productId) {
    try {
      const result = await this.dataAcess.deleteProduct(productId);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }

  async updateProduct(productId, productData) {
    try {
      const result = await this.dataAcess.updateProduct(productId, productData);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }
}
