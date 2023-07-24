import express from "express";
import { deleteTeamById, deleteTeamByName, getAllTeams, getTeamById, getTeamByName, getTeamsByLeague, postTeam, postTeamArray, updateTeamById, updateTeamByName } from "../controllers/teamController.js";

export const teamRouter = express.Router();


// GET ALL

teamRouter.get("/teams", getAllTeams)

// GET BY LEAGUE

teamRouter.get("/teamsByLeague/:league", getTeamsByLeague)

// GET

teamRouter.get("/teamById/:id", getTeamById)

teamRouter.get("/teamByName/:name", getTeamByName)

// POST

// Only one team

teamRouter.post("/teams", postTeam)

// An array of countries

teamRouter.post("/teamsArray", postTeamArray);

// PUT

teamRouter.put("/teamById/:id", updateTeamById)

teamRouter.put("/teamByName/:name", updateTeamByName)

// DELETE

teamRouter.delete("/teamById/:id", deleteTeamById)

teamRouter.delete("/teamByName/:name", deleteTeamByName)