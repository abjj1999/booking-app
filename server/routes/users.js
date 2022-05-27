import express from "express";
import {
  deleteUser,
  updateUser,
  getSingelUser,
  getAllUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verify.js";

const router = express.Router();

// //check auth
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("you are logged in");
// });
// //check auth loggedin user
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("you are logged in, you can do whatever boo");
// });
// //is admin
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("you are logged in, You are an admin");
// });

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getSingelUser);
router.get("/", verifyAdmin, getAllUsers);

export default router;
