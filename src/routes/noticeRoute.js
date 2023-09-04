import express from "express";
import { getAllNotices } from "../controllers/noticeController";

export const noticeRouter = express.Router();

// GET ALL

countryRouter.get("/notices", getAllNotices)

// GET