import express from "express";
import { getAllNotices } from "../controllers/noticeController.js";
import { fetchNotices } from "../functions/fetchGeneralNews.js";

export const noticeRouter = express.Router();

// GET ALL

noticeRouter.get("/notices", getAllNotices)

noticeRouter.get("/fetchNotices", fetchNotices)

// GET