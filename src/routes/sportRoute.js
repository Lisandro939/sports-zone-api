import express from "express";
import { deleteSportById, deleteSportByName, getAllSports, getSportById, getSportByName, postSport, postSportArray, updateSportById, updateSportByName } from "../controllers/sportController.js";


export const sportRouter = express.Router();

// GET ALL

sportRouter.get("/sport", getAllSports)

// GET

sportRouter.get("/sportById/:id", getSportById)

sportRouter.get("/sportByName/:name", getSportByName)

// POST

// Only one sport

sportRouter.post("/sport", postSport)

// An array of sports

sportRouter.post("/sportArray", postSportArray);


// PUT

sportRouter.put("/sport/:id", updateSportById)

sportRouter.put("/sportByName/:name", updateSportByName)

// DELETE

sportRouter.delete("/sport/:id", deleteSportById)

sportRouter.delete("/sportByName/:name", deleteSportByName)
