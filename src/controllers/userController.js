import { connection, establishConnection } from '../index.js';
import { validateUser } from '../schemes/userScheme.js';

export function getAllUsers (_req, res) {
    connection.query('SELECT * FROM user', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving users');
        } else {
            res.json(results);
        }
    })
}

export function getUserById (req, res) {
    const id = req.params.id;
    connection.query('SELECT * FROM user WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user');
        } else {
            res.json(results);
        }
    })
}

export function getUserByUsername (req, res) {
    const username = req.params.username;
    connection.query('SELECT * FROM user WHERE username = ?', [username], (err, results) => {
        if (err) {
            console.log('Error to get user by username: ',err)
            res.status(500).send('Error retrieving user');
        } else {
            console.log(results)
            res.json(results);
        }
    })
}

export function createUser (req, res) {
    const user = req.body;

    const result = validateUser(user);

    if (result.error) {
        return res.status(400).json({ error: result.error.issues[0].message});
    }

    connection.query('INSERT INTO user SET ?', [user], (err, results) => {
        if (err) {
            console.log(err.sqlMessage)
            res.status(505).send('Error creating user');
        } else {
            res.json(results);
        }
    })
}

export function updateUserById (req, res) {
    const id = req.params.id;
    const user = req.body;
    connection.query('UPDATE user SET ? WHERE id = ?', [user, id], (err, results) => {
        if (err) {
            res.status(500).send('Error updating user');
        } else {
            res.json(results);
        }
    }) 
}

export function updateUserByUsername (req, res) {
    const username = req.params.username;
    const user = req.body;
    connection.query('UPDATE user SET ? WHERE username = ?', [user, username], (err, results) => {
        if (err) {
            res.status(500).send('Error updating user');
        } else {
            res.json(results);
        }
    }) 
}

export function deleteUserById (req, res) {
    const id = req.params.id;
    connection.query('DELETE FROM user WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting user');
        } else {
            res.json(results);
        }
    })
}

export function deleteUserByUsername (req, res) {
    const username = req.params.username;
    connection.query('DELETE FROM user WHERE username = ?', [username], (err, results) => {
        if (err) {
            res.status(500).send('Error deleting user');
        } else {
            res.json(results);
        }
    })
}