require("dotenv").config();
let express = require("express");
let cors = require("cors");

let bookingRoutes =  require("./routes/bookingRoutes");

let app = express();
app.use(cors()); //sab port ki permission allow karta hai
app.use(express.json()); // frontend se jobhi data ata hai voh json mai ata backend ke andar ata hai use JS object mai convert kiya
app.use("/",bookingRoutes);

let PORT = process.env.PORT || 9000; //render bhi khudse port deta hai kabhi kabhi esliye or gate use kiya hai 

app.listen(PORT,()=>console.log("Server running on port "+ PORT));
