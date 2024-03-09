import express from "express"
import ProductsRouter from "./application/router/products.router.js"
import mongooseDb from "./infraestructure/database/config.database.js";


const app = express()
const port = process.env.PORT || 8080;
console.log(process.env.PORT)



app.use(express.json())
app.use("/api",ProductsRouter)


app.listen(port,()=>{
console.log("port connection to 8080")
})