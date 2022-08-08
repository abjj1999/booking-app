import express from "express";
import {
  createRoom,
  getAllRooms,
  getSingelRoom,
  updateRoom,
  deleteRoom,
  updateRoomAva,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verify.js";
const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
router.get("/", getAllRooms);
router.get("/:id", getSingelRoom);
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAva);
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

export default router;
