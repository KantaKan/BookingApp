import express from "express"
import Hotel from "./models/Hotel.js"

const router = express.Router();

//Create
router.post("/", async (req,res) => {
    
    const newHotel = new Hotel(req.body)
    
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
});
//Update
router.put("/:id", async (req,res) => {
     
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,
             { $set: req.body},
             { $new: true})
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
});
//Delete
router.put("/:id", async (req,res) => {
     
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("hotel has been deleted.");
    } catch (error) {
        res.status(500).json(error)
    }
});
//Get
router.get("/:id", async (req,res) => {
     
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
});
//Get All
router.get("/", async (req,res,next) => {

    const failed = true
    const err = new Error()
    err.status = 404;
    err.message = "sorry not found"
    if (failed) return next(err)


    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json(error)
    }
});

export default router