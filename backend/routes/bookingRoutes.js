const express = require("express");
const bookingController = require("../controllers/bookingController");

let router = express.Router();  //express ka function use kiya 

router.post("/add",bookingController.addController); //condition hai jab post hoga with endpoint "add" toh use addcontroller ke pass bhejenge
router.get("/get",bookingController.getAllBooking);
router.put("/update/:id",bookingController.updateBooking); // id mongodb ne diya hai har ek entry ko taki uniquely identify ho sake , yeh variable hai esliye ":" mai likha hai
router.delete("/delete/:id", bookingController.deleteBooking); // delete ke liye bhi id chahiye hogi taki pata chale ki kis entry ko delete karna hai

module.exports = router;
