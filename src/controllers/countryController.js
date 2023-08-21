import { connection } from '../index.js';

export function getAllCountries (_req, res) {
    connection.query('SELECT * FROM paises ORDER BY name', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving country');
        } else {
            res.json(results);
        }
    })
}

// ...

export function getCountryById (req, res) {
    const id = req.params.id;
    connection.query('SELECT * FROM country WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving country');
        } else {
            res.json(results);
        }
    })
}

export function getCountryByName (req, res) {
    const name = req.params.name;
    connection.query('SELECT * FROM country WHERE name = ?', [name], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving country');
        } else {
            res.json(results);
        }
    })
}

export function postCountry (req, res) {
    const country = req.body;
    connection.query('INSERT INTO country SET ?', [country], (err, results) => {
        if (err) {
            res.status(500).send('Error creating country');
        } else {
            res.json(results);
        }
    })
}

export function postCountryArray (req, res) {
    const countries = req.body;
    const values = countries.map(country => [country.name, country.region]);
    connection.query('INSERT INTO country (name, region) VALUES ?', [values], (err, results) => {
        if (err) {
            res.status(500).send('Error creating countries');
        } else {
            res.json(results);
        }
    })
}

export function updateCountryById (req, res) {
    const id = req.params.id;
    const country = req.body;
    connection.query('UPDATE country SET ? WHERE id = ?', [country, id], (err, results) => {
        if (err) {
            res.status(500).send('Error updating country');
        } else {
            res.json(results);
        }
    })
}

export function updateCountryByName (req, res) {
    const name = req.params.name;
    const country = req.body;
    connection.query('UPDATE country SET ? WHERE name = ?', [country, name], (err, results) => {
        if (err) {
            res.status(500).send('Error updating country');
        } else {
            res.json(results);
        }
    })
}

export function deleteCountryById (req, res) {
    const id = req.params.id;
    connection.query('DELETE FROM country WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting country');
        } else {
            res.json(results);
        }
    })
}

export function deleteCountryByName (req, res) {
    const name = req.params.name;
    connection.query('DELETE FROM country WHERE name = ?', [name], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting country');
        } else {
            res.json(results);
        }
    }) 
}