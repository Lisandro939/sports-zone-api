import express from 'express';

import { config } from 'dotenv';
config();

import cors from 'cors';

// cron
import cron from 'node-cron';

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
import { flagsRouter } from './routes/flagsRoute.js';
import { fetchNotices } from './functions/fetchGeneralNews.js';
import { noticeRouter } from './routes/noticeRoute.js';

export const connection = mysql.createConnection({
    host: process.env.HOST_URL,
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

export function establishConnection() {
  
    connection.connect((error) => {
      if (error) {
        console.error('Error de conexión: ', error);
        // Si hay un error de conexión, espera 5 segundos y vuelve a intentarlo
        setTimeout(establishConnection, 5000);
      } else {
        console.log('Conexión exitosa a la base de datos de Sports Zone');
      }
    });

    connection.on('error', (error) => {
      console.error('Error de conexión: ', error);
      // Si hay un error de conexión, espera 5 segundos y vuelve a intentarlo
      if (error.code === 'PROTOCOL_CONNECTION_LOST') {
        establishConnection();
      } else {
        throw error;
      }
    });
}

establishConnection();


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
                url: 'http://localhost:3001',
                url: 'https://sports-zone-api.onrender.com'
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
app.use(cors())


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);

app.get('/', (req, res) => {
    res.send('Andá pa otro lado bobo');
}
);

app.use('/api/v1', usersRouter);
app.use('/api/v1', countryRouter);
app.use('/api/v1', sportRouter);
app.use('/api/v1', leagueRouter);
app.use('/api/v1', teamRouter);
app.use('/api/v1', playerRouter);
app.use('/api/v1', flagsRouter);
app.use('/api/v1', noticeRouter);

// Make a cron every 5 seconds
cron.schedule('*/30 * * * * *', () => { 
    console.log('Fetching news');
    fetchNotices();
});