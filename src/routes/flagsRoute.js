import express from "express";
import { getFlag } from "../controllers/flagController.js";

export const flagsRouter = express.Router();

// GET ALL

flagsRouter.get("/flag/:country", getFlag)
