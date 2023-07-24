import express from "express";
import { deletePlayerById, deletePlayerByName, getAllPlayers, getPlayerById, getPlayerByName, postPlayer, postPlayerArray, updatePlayerById, updatePlayerByName } from "../controllers/playerController.js";

export const playerRouter = express.Router();


// GET ALL

playerRouter.get("/players", getAllPlayers)

// GET

playerRouter.get("/playerById/:id", getPlayerById)

playerRouter.get("/playerByName/:name", getPlayerByName)

// POST

// Only one player

playerRouter.post("/player", postPlayer)

// An array of countries

playerRouter.post("/playersArray", postPlayerArray);

// PUT

playerRouter.put("/playerById/:id", updatePlayerById)

playerRouter.put("/playerByName/:name", updatePlayerByName)

// DELETE

playerRouter.delete("/playerById/:id", deletePlayerById)

playerRouter.delete("/playerByName/:name", deletePlayerByName)