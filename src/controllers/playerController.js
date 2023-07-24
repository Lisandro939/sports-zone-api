import { connection } from '../index.js';

export function getAllPlayers (_req, res) {
    connection.query('SELECT * FROM player', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving players');
        } else {
            res.json(results);
        }
    })
}

export function getPlayerById (req, res) {
    const id = req.params.id;
    connection.query('SELECT * FROM player WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving player');
        } else {
            res.json(results);
        }
    })
}

export function getPlayerByName (req, res) {
    const name = req.params.name;
    connection.query('SELECT * FROM player WHERE name = ?', [name], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving player');
        } else {
            res.json(results);
        }
    })
}

export function postPlayer (req, res) {
    const team = req.body;
    connection.query('INSERT INTO player SET ?', [team], (err, results) => {
        if (err) {
            res.status(500).send('Error creating player');
        } else {
            res.json(results);
        }
    })
}

export function postPlayerArray (req, res) {
    const players = req.body;
    const values = players.map(player => [player.team, player.name, player.url_image, player.number, player.position]);
    connection.query('INSERT INTO player (team, name, url_image, number, position) VALUES ?', [values], (err, results) => {
        if (err) {
            res.status(500).send('Error creating players');
        } else {
            res.json(results);
        }
    })
}

export function updatePlayerById (req, res) {
    const id = req.params.id;
    const player = req.body;
    connection.query('UPDATE player SET ? WHERE id = ?', [player, id], (err, results) => {
        if (err) {
            res.status(500).send('Error updating player');
        } else {
            res.json(results);
        }
    })
}

export function updatePlayerByName (req, res) {
    const name = req.params.name;
    const player = req.body;
    connection.query('UPDATE player SET ? WHERE name = ?', [player, name], (err, results) => {
        if (err) {
            res.status(500).send('Error updating player');
        } else {
            res.json(results);
        }
    })
}


export function deletePlayerById (req, res) {
    const id = req.params.id;
    connection.query('DELETE FROM player WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting player');
        } else {
            res.json(results);
        }
    })
}

export function deletePlayerByName (req, res) {
    const name = req.params.name;
    connection.query('DELETE FROM player WHERE name = ?', [name], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting player');
        } else {
            res.json(results);
        }
    })
}