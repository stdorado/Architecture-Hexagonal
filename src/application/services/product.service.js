import ProducRepository from "../../domain/repositories/product.repository.js";

class ProductService {
    constructor() {
        this.ProductRepository = new ProducRepository();
    }

    async getAll() {
        return this.ProductRepository.getAll();
    }

    async getById(id) {
        return this.ProductRepository.getById(id);
    }

    async create(productData) {
        return this.ProductRepository.create(productData);
    }

    async update(id, productData) {
        return this.ProductRepository.update(id, productData);
    }

    async delete(id) {
        return this.ProductRepository.delete(id);
    }
}

const product = new ProductService();
export default product;