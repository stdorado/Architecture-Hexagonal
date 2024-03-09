import product from "../services/product.service.js";

export async function getAll(req, res) {
    try {
        const GetAllProducts = await product.getAll();
        res.json(GetAllProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getById(req, res) {
    try {
        const id = req.params.id;
        const GetByIdProducts = await product.getById(id);
        res.json(GetByIdProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function create(req, res) {
    try {
        const productData = req.body;
        const CreateProducts = await product.create(productData);
        res.json(CreateProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function update(req, res) {
    try {
        const id = req.params.id;
        const productData = req.body;
        const UpdateProducts = await product.update(id, productData);
        res.json(UpdateProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function remove(req, res) {
    try {
        const id = req.params.id;
        await product.remove(id);
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}