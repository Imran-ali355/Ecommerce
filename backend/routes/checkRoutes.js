import express from "express";
import {
  getCheckFormController,
  postCheckFormController,
} from "../controllers/checkController";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware";


const router = express.Router();


router.post("/post-checkForm", postCheckFormController);


router.get("/get-checkForm", getCheckFormController);

export default router;
