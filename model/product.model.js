
const products=require("../data/products.json")
const connectToMongoDB=require("../mongo-connection")
const ProductCollection="products"


async function find(){
    const db=await new connectToMongoDB().Get()
    return new Promise(async(resolve,reject)=>{
        const product=await db.collection("products").find({}).toArray()
        resolve(product)
    })}

async function findById(id){
    const db=await new connectToMongoDB().Get()
    return new Promise(async(resolve,reject)=>{
        const result=await db.collection(ProductCollection).findOne({_id: new ObjectId(id)})
        resolve(result)
    })}
    
const productModel={
    find,
    findById
}

module.exports=productModel