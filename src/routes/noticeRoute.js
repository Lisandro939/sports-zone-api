import express from "express";
import { getAllNotices } from "../controllers/noticeController";

export const noticeRouter = express.Router();

// GET ALL

noticeRouter.get("/notices", getAllNotices)

// GET