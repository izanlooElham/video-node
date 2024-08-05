const productModel = require("../model/product.model")

async function get(req,res){
    try {
        const products=await productModel.find()
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(products))
        res.end()
    } catch (error) {
        console.log(error.message)
    }}
async function getById(res,req){
    try {
        const id=req.url.split("/")[3]
        const product=await productModel.findById(id)
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(product))
        res.end()
    } catch (error) {
        console.log(error.message)
    }}
const productController={
    get,
    getById,
}

module.exports=productController;