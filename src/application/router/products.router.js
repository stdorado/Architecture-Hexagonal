import {Router} from "express"
import { getAll,getById,update,create,remove } from "../controllers/product.controller.js"

const ProductRouter = Router()

ProductRouter.get("/products",getAll)
ProductRouter.get("/products-filterId",getById)
ProductRouter.post("/products-Create",create)
ProductRouter.delete("/products-Delete", remove)
ProductRouter.put("/products-update",update)

export default ProductRouter;