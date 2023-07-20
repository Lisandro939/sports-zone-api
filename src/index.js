import express from 'express';

// cron
import cron from 'node-cron';

// swagger
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { fetching } from './functions/fetch.js';

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

// Make a cron every 5 seconds
cron.schedule('*/15 * * * * *', () => {
    fetching();
}
);
