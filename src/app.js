import express from "express"
import ProductsRouter from "./infraestructure/router/products.router.js"
import mongooseDb from "./domain/database/config.database.js";


const app = express()
const port = process.env.PORT || 8080;



app.use(express.json())
app.use("/api",ProductsRouter)


app.listen(port,()=>{
console.log("port connection to 8080")
})