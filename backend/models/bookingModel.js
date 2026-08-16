let { MongoClient, ObjectId } = require("mongodb");

let url = process.env.MONGO_URL;

let addBooking = (obj , res)=>
{
    
    let client = new MongoClient(url); // client mera code ko url ke mogodb ke account se connect karta hai
    client.connect();
    let db = client.db("mern");
    let collec = db.collection("events");

    collec.insertOne(obj)
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close()); //yeh collection matlab (table) hai data dalta hai mogo ke andar 
    
}

let getAllBooking = (res)=>
{
    let client = new MongoClient(url); // client mera code ko url ke mogodb ke account se connect karta hai
    client.connect();
    let db = client.db("mern");
    let collec = db.collection("events");

    collec.find().toArray()
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close()); //find() mujhe json lake dega but mai use array mai create kara duga
}

let updateBooking = (id , data , res)=>
{
    let client = new MongoClient(url); 
    client.connect();
    let db = client.db("mern");
    let collec = db.collection("events");

    collec.updateOne( {_id : new ObjectId(id) } , {$set:data} ) // idhar update ko parameter object mai chaiye "{}"aur data ka voh syntax hai
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close());
}

let deleteBooking = (id , res ) =>
{
    try 
    {
        let client = new MongoClient(url); 
        client.connect();
        let db = client.db("mern");
        let collec = db.collection("events");

        collec.deleteOne( {_id: new ObjectId(id)} )
        .then((result)=>res.send(result))
        .catch((err)=>res.send(err))
        .finally(()=>client.close());
    }
    catch(err)
    {
        res.send(err)
    }
}

module.exports = { addBooking , getAllBooking , updateBooking , deleteBooking};
