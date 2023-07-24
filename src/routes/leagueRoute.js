import express from "express";
import { deleteLeagueById, deleteLeagueByName, getAllLeagues, getLeagueById, getLeagueByName, postLeague, postLeagueArray, updateLeagueById, updateLeagueByName } from "../controllers/leagueController.js";

export const leagueRouter = express.Router();

// GET ALL

leagueRouter.get("/league", getAllLeagues);

// GET

leagueRouter.get("/leagueById/:id", getLeagueById);

leagueRouter.get("/leagueByName/:name", getLeagueByName);

// POST

// Only one league

leagueRouter.post("/league", postLeague);

// An array of leagues

leagueRouter.post("/leagueArray", postLeagueArray);

// PUT

leagueRouter.put("/leagueById/:id", updateLeagueById);

leagueRouter.put("/leagueByName/:name", updateLeagueByName);

// DELETE

leagueRouter.delete("/leagueById/:id", deleteLeagueById);

leagueRouter.delete("/leagueByName/:name", deleteLeagueByName);

