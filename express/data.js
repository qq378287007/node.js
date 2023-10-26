// MongoDB 3.0 以上版本适用，老版本不适用。
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", (err, client) => {
    if (err) {
        throw err;
    }

    let db = client.db("动物");
    db.collection("哺乳动物")
        .find()
        .toArray((err, result) => {
            if (err)
                throw err;
            console.log(result);
            client.close();
        });
});
