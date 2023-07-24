import express from "express";
import { createUser, deleteUserById, deleteUserByUsername, getAllUsers, getUserById, getUserByUsername, updateUserById, updateUserByUsername } from "../controllers/userController.js";
import { getUserLeaguesPreferencesById, getUserLeaguesPreferencesByUsername, getUserPlayersPreferencesById, getUserPlayersPreferencesByUsername, getUserPreferencesById, getUserPreferencesByUsername, getUserSportsPreferencesById, getUserSportsPreferencesByUsername, getUserTeamsPreferencesById, getUserTeamsPreferencesByUsername } from "../controllers/user/userPreferenceController.js";

export const usersRouter = express.Router();

usersRouter.get("/user", getAllUsers)

usersRouter.get("/userById/:id", getUserById)

usersRouter.get("/userByUsername/:username", getUserByUsername)

usersRouter.post("/user", createUser)

usersRouter.put("/userById/:id", updateUserById)

usersRouter.put("/userByUsername/:username", updateUserByUsername)

usersRouter.delete("/userById/:id", deleteUserById)

usersRouter.delete("/userByUsername/:username", deleteUserByUsername)

// Preferences routes

// All

usersRouter.get("/user/preferencesById/:user_id", getUserPreferencesById)

usersRouter.get("/user/preferencesByUsername/:username", getUserPreferencesByUsername)

// Sports

usersRouter.get("/user/preferencesById/sports/:user_id", getUserSportsPreferencesById)

usersRouter.get("/user/preferencesByUsername/sports/:username", getUserSportsPreferencesByUsername)

// Leagues

usersRouter.get("/user/preferencesById/leagues/:user_id", getUserLeaguesPreferencesById)

usersRouter.get("/user/preferencesByUsername/leagues/:username", getUserLeaguesPreferencesByUsername)

// Teams

usersRouter.get("/user/preferencesById/teams/:user_id", getUserTeamsPreferencesById)

usersRouter.get("/user/preferencesByUsername/teams/:username", getUserTeamsPreferencesByUsername)

// Players

usersRouter.get("/user/preferencesById/players/:user_id", getUserPlayersPreferencesById)

usersRouter.get("/user/preferencesByUsername/players/:username", getUserPlayersPreferencesByUsername)