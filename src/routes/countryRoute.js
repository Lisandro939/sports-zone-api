import express from "express";
import { deleteCountryById, deleteCountryByName, getAllCountries, getCountryById, getCountryByName, postCountry, postCountryArray, updateCountryById, updateCountryByName } from "../controllers/countryController.js";

export const countryRouter = express.Router();

// GET ALL

countryRouter.get("/country", getAllCountries)

// GET

countryRouter.get("/countryById/:id", getCountryById)

countryRouter.get("/countryByName/:name", getCountryByName)

// POST

// Only one country

countryRouter.post("/country", postCountry)

// An array of countries

countryRouter.post("/countryArray", postCountryArray);

// PUT

countryRouter.put("/countryById/:id", updateCountryById)

countryRouter.put("/countryByName/:name", updateCountryByName)

// DELETE

countryRouter.delete("/countryById/:id", deleteCountryById)

countryRouter.delete("/countryByName/:name", deleteCountryByName)
