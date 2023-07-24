import express from 'express';

import { config } from 'dotenv';
config();

// cron
// import cron from 'node-cron';

// swagger
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

// SQL
import mysql from 'mysql2';
import { usersRouter } from './routes/userRoute.js';
import { countryRouter } from './routes/countryRoute.js';
import { sportRouter } from './routes/sportRoute.js';
import { leagueRouter } from './routes/leagueRoute.js';
import { teamRouter } from './routes/teamRoute.js';
import { playerRouter } from './routes/playerRoute.js';

export const connection = mysql.createConnection({
    host: process.env.HOST_URL,
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

connection.connect((error) => {
    if (error) {
      console.error('Error de conexión: ', error);
    } else {
      console.log('Conexión exitosa a la base de datos de Sports Zone');
    }
});


const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Sports Zone API',
            version: '1.0.0',
            description: 'API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};
const swaggerOptions = {
    swaggerDefinition: swaggerSpec.definition,
    apis: swaggerSpec.apis,
}

// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerOptions)))


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use('/api/v1', usersRouter);
app.use('/api/v1', countryRouter);
app.use('/api/v1', sportRouter);
app.use('/api/v1', leagueRouter);
app.use('/api/v1', teamRouter);
app.use('/api/v1', playerRouter);

// Make a cron every 5 seconds
// cron.schedule('*/15 * * * * *', () => { ... });


