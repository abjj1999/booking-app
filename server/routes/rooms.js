import express from "express";
import {
  createRoom,
  getAllRooms,
  getSingelRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verify.js";
const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
router.get("/", getAllRooms);
router.get("/:id", getSingelRoom);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

export default router;
