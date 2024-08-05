const { MongoClient } = require("mongodb")

module.exports=class connectToMongoDB{
    #DB_URL="mongodb://127.0.0.1:27017/mongo-1"
    #db=null
    async connect(){
        try {
            let client=new MongoClient(this.#DB_URL)
            let db=client.db()
            return db;
        } catch (error) {
            console.log(error.message)
        }
    }
    async Get(){
        try {
            if(this.#db){
                return this.#db
            }
           this.#db=await this.connect() 
           return this.#db 
        } catch (error) {
            console.log(error.message)
        }
    }
}