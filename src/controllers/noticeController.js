import { connection } from '../index.js';

export function getAllNotices (_req, res) {
    connection.query('SELECT * FROM notice', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving league');
        } else {
            res.json(results);
        }
    })
}