import express from "express";
import Hotel from "./models/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controller/hotelcontroller.js";
import { createError } from "../utils/error.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel);
//Update
router.put("/:id", verifyAdmin, updateHotel);
//Delete
router.delete("/:id", verifyAdmin, deleteHotel);
//Get
router.get("/:id", getHotel);
//Get All
router.get("/", getHotels);
router.get("/countByCity", getHotels);
router.get("/countByType", getHotels);

export default router;
