import express from "express"
import Hotel from "./models/Hotel.js"
import { createHotel,deleteHotel,getHotel,getHotels,updateHotel } from "../controller/hotelcontroller.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//Create
router.post("/", createHotel);
//Update
router.put("/:id", updateHotel);
//Delete
router.put("/:id", deleteHotel);
//Get
router.get("/:id", getHotel);
//Get All
router.get("/", getHotels);

export default router