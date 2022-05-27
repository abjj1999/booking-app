import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getSingelHotel,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();

// router.get("/", function (req, res) {
//   res.send("hello");
// });
//CREATE
router.post("/", verifyAdmin, createHotel);

//PUT
router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);

//GET By ID
router.get("/:id", getSingelHotel);

// GET ALL
router.get("/", getAllHotels);
export default router;
