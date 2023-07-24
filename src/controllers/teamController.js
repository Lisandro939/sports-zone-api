import { connection } from '../index.js';

const regex = (word) => { 
    return word.replace(/([a-z])([A-Z0-9()])/g, '$1 $2').replace(/(\()(\w)/g, '$1 $2')
}

export function getAllTeams (_req, res) {
    connection.query('SELECT * FROM team', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving teams');
        } else {
            res.json(results);
        }
    })
}

export function getTeamsByLeague (req, res) {
    const league = regex(req.params.league);
    connection.query('SELECT * FROM team WHERE league = ?', [league], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving teams');
        } else {
            res.json(results);
        }
    })
}

export function getTeamById (req, res) {
    const id = req.params.id;
    connection.query('SELECT * FROM team WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving team');
        } else {
            res.json(results);
        }
    })
}

export function getTeamByName (req, res) {
    const name = regex(req.params.name);
    connection.query('SELECT * FROM team WHERE name = ?', [name], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving team');
        } else {
            res.json(results);
        }
    })
}

export function postTeam (req, res) {
    const team = req.body;
    connection.query('INSERT INTO team SET ?', [team], (err, results) => {
        if (err) {
            res.status(500).send('Error creating team');
        } else {
            res.json(results);
        }
    })
}

export function postTeamArray (req, res) {
    const teams = req.body;
    const values = teams.map(team => [team.name, team.league, team.logo_url]);
    connection.query('INSERT INTO team (name, league, logo_url) VALUES ?', [values], (err, results) => {
        if (err) {
            res.status(500).send('Error creating teams');
        } else {
            res.json(results);
        }
    })
}

export function updateTeamById (req, res) {
    const id = req.params.id;
    const team = req.body;
    connection.query('UPDATE team SET ? WHERE id = ?', [team, id], (err, results) => {
        if (err) {
            res.status(500).send('Error updating team');
        } else {
            res.json(results);
        }
    })
}

export function updateTeamByName (req, res) {
    const name = regex(req.params.name);
    const team = req.body;
    connection.query('UPDATE team SET ? WHERE name = ?', [team, name], (err, results) => {
        if (err) {
            res.status(500).send('Error updating team');
        } else {
            res.json(results);
        }
    })
}


export function deleteTeamById (req, res) {
    const id = req.params.id;
    connection.query('DELETE FROM team WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting team');
        } else {
            res.json(results);
        }
    })
}

export function deleteTeamByName (req, res) {
    const name = regex(req.params.name);
    connection.query('DELETE FROM team WHERE name = ?', [name], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting team');
        } else {
            res.json(results);
        }
    })
}