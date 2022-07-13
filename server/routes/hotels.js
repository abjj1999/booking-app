import express from "express";
import {
  countByCity,
  countbyType,
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
router.put("/find/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/find/:id", verifyAdmin, deleteHotel);

//GET By ID
router.get("/find/:id", getSingelHotel);

// GET ALL
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countbyType", countbyType);
export default router;
