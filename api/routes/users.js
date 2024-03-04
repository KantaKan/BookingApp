import express from "express";
import {
  getUser,
  deleteUser,
  createUser,
  updateUser,
  getUsers,
} from "../controller/usercontroller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello youre login to check auth and acc is authenticated");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("youre logged in and allow to delete your account ");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("you're admin kub");
// });

router.post("/", createUser);
//Update
router.put("/:id", updateUser);
//Delete
router.put("/:id", deleteUser);
//Get
router.get("/:id", getUser);
//Get All
router.get("/", getUsers);

export default router;
