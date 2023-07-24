import { connection } from '../index.js';

export function getAllSports (_req, res) {
    connection.query('SELECT * FROM sport', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving sport');
        } else {
            res.json(results);
        }
    })
}

export function getSportById (req, res) {
    const id = req.params.id;
    connection.query('SELECT * FROM sport WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving sport');
        } else {
            res.json(results);
        }
    })
}

export function getSportByName (req, res) {
    const name = req.params.name;
    connection.query('SELECT * FROM sport WHERE name = ?', [name], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving sport');
        } else {
            res.json(results);
        }
    })
}

export function postSport (req, res) {
    const sport = req.body;
    connection.query('INSERT INTO sport SET ?', [sport], (err, results) => {
        if (err) {
            res.status(500).send('Error creating sport');
        } else {
            res.json(results);
        }
    })
}

export function postSportArray (req, res) {
    const sports = req.body;
    const values = sports.map(sport => [sport.name]);
    connection.query('INSERT INTO sport (name) VALUES ?', [values], (err, results) => {
        if (err) {
            res.status(500).send('Error creating sports');
        } else {
            res.json(results);
        }
    })
}

export function updateSportById (req, res) {
    const id = req.params.id;
    const sport = req.body;
    connection.query('UPDATE sport SET ? WHERE id = ?', [sport, id], (err, results) => {
        if (err) {
            res.status(500).send('Error updating sport');
        } else {
            res.json(results);
        }
    })
}

export function updateSportByName (req, res) {
    const name = req.params.name;
    const sport = req.body;
    connection.query('UPDATE sport SET ? WHERE name = ?', [sport, name], (err, results) => {
        if (err) {
            res.status(500).send('Error updating sport');
        } else {
            res.json(results);
        }
    })
}

export function deleteSportById (req, res) {
    const id = req.params.id;
    connection.query('DELETE FROM sport WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting sport');
        } else {
            res.json(results);
        }
    })
} 

export function deleteSportByName (req, res) {
    const name = req.params.name;
    connection.query('DELETE FROM sport WHERE name = ?', [name], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting sport');
        } else {
            res.json(results);
        }
    })
}