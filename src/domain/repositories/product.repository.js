import productSchema from "../models/product.schema.js";

    class ProducRepository {
        async getAll() {
          return productSchema.find();
        }
      
        async getById(id) {
          return productSchema.findById(id);
        }
      
        async create(productData) {
          return productSchema.create(productData);
        }
      
        async update(id, productData) {
          return productSchema.findByIdAndUpdate(id, productData, { new: true });
        }
      
        async delete(id) {
          return productSchema.findByIdAndDelete(id);
        }
      }
    


export default ProducRepository;