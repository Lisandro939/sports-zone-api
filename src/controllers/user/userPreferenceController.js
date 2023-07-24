import { connection } from '../../index.js';

// All

export const getUserPreferencesById = (req, res) => {
    const user_id = req.params.user_id;
    connection.query('SELECT * FROM user_preference WHERE user_id = ?', [user_id], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user preferences');
        } else {
            res.json(results);
        }
    })
}

export const getUserPreferencesByUsername = (req, res) => {
    const username = req.params.username;
    connection.query('SELECT * FROM user_preference WHERE username = ?', [username], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user preferences');
        } else {
            res.json(results);
        }
    })
}

// Sports

export const getUserSportsPreferencesById = (req, res) => {
    const user_id = req.params.user_id;
    connection.query('SELECT * FROM user_preference WHERE user_id = ? AND type = "sport"', [user_id], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user sports preferences');
        } else {
            res.json(results);
        }
    })
}

export const getUserSportsPreferencesByUsername = (req, res) => {
    const username = req.params.username;
    connection.query('SELECT * FROM user_preference WHERE username = ? AND type = "sport"', [username], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user sports preferences');
        } else {
            res.json(results);
        }
    })
}

// Leagues

export const getUserLeaguesPreferencesById = (req, res) => {
    const user_id = req.params.user_id;
    connection.query('SELECT * FROM user_preference WHERE user_id = ? AND type = "league"', [user_id], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user leagues preferences');
        } else {
            res.json(results);
        }
    })
}

export const getUserLeaguesPreferencesByUsername = (req, res) => {
    const username = req.params.username;
    connection.query('SELECT * FROM user_preference WHERE username = ? AND type = "league"', [username], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user leagues preferences');
        } else {
            res.json(results);
        }
    })
}

// Teams

export const getUserTeamsPreferencesById = (req, res) => {
    const user_id = req.params.user_id;
    connection.query('SELECT * FROM user_preference WHERE user_id = ? AND type = "team"', [user_id], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user teams preferences');
        } else {
            res.json(results);
        }
    })
}

export const getUserTeamsPreferencesByUsername = (req, res) => {
    const username = req.params.username;
    connection.query('SELECT * FROM user_preference WHERE username = ? AND type = "team"', [username], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user teams preferences');
        } else {
            res.json(results);
        }
    })
}

// Players

export const getUserPlayersPreferencesById = (req, res) => {
    const user_id = req.params.user_id;
    connection.query('SELECT * FROM user_preference WHERE user_id = ? AND type = "player"', [user_id], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user players preferences');
        } else {
            res.json(results);
        }
    })
}

export const getUserPlayersPreferencesByUsername = (req, res) => {
    const username = req.params.username;
    connection.query('SELECT * FROM user_preference WHERE username = ? AND type = "player"', [username], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving user players preferences');
        } else {
            res.json(results);
        }
    })
}


