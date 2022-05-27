import express from "express";
import {
  createRoom,
  getAllRooms,
  getSingelRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/room.js";
const router = express.Router();

router.post("/", createRoom);
router.get("/", getAllRooms);
router.get("/:id", getSingelRoom);
router.put("/:id", updateRoom);
router.delete("/:id", deleteRoom);

export default router;
