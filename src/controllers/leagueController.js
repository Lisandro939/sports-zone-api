import { connection } from '../index.js';

export function getAllLeagues (_req, res) {
    connection.query('SELECT * FROM league', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving league');
        } else {
            res.json(results);
        }
    })
}

export function getLeagueById (req, res) {
    const id = req.params.id;
    connection.query('SELECT * FROM league WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving league');
        } else {
            res.json(results);
        }
    })
}

export function getLeagueByName (req, res) {
    const name = req.params.name;
    connection.query('SELECT * FROM league WHERE name = ?', [name], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving league');
        } else {
            res.json(results);
        }
    })
}

export function postLeague (req, res) {
    const league = req.body;
    connection.query('INSERT INTO league SET ?', [league], (err, results) => {
        if (err) {
            res.status(500).send('Error creating league');
        } else {
            res.json(results);
        }
    })
}

export function postLeagueArray (req, res) {
    const leagues = req.body;
    const values = leagues.map(league => [league.name, league.sport, league.country]);
    connection.query('INSERT INTO league (name, sport, country) VALUES ?', [values], (err, results) => {
        if (err) {
            console.log(err.sql)
            res.status(500).send('Error creating leagues');
        } else {
            res.json(results);
        }
    })
}

export function updateLeagueById (req, res) {
    const id = req.params.id;
    const league = req.body;
    connection.query('UPDATE league SET ? WHERE id = ?', [league, id], (err, results) => {
        if (err) {
            res.status(500).send('Error updating league');
        } else {
            res.json(results);
        }
    })
}

export function updateLeagueByName (req, res) {
    const name = req.params.name;
    const league = req.body;
    connection.query('UPDATE league SET ? WHERE name = ?', [league, name], (err, results) => {
        if (err) {
            res.status(500).send('Error updating league');
        } else {
            res.json(results);
        }
    })
}

export function deleteLeagueById (req, res) {
    const id = req.params.id;
    connection.query('DELETE FROM league WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting league');
        } else {
            res.json(results);
        }
    })
}

export function deleteLeagueByName (req, res) {
    const name = req.params.name;
    connection.query('DELETE FROM league WHERE name = ?', [name], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting league');
        } else {
            res.json(results);
        }
    })
}