const swaggerJSDoc = require('swagger-jsdoc');
// const routes = require('routes');

const swaggerDefinition = {
    openapi:'3.0.0',
    info: {
        title: 'Social Auth API',
        version: '1.0.0',
        description: 'Authentication System with Role-Based Access Control',

    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [{
        bearerAuth: []
    }],
};

const options = {
    swaggerDefinition,
    apis: ['routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
