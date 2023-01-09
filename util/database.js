const mongoose = require("mongoose");

const DBConcction = callback => {
    mongoose.connect('mongodb+srv://walid:Walid@1234@cluster0.rcqbbao.mongodb.net/?retryWrites=true&w=majority').then(() => {
        console.log("DB Connected!!")
        callback()
    }).catch(err => {
        console.log(err);
    })
}



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
exports.DBConcction = DBConcction;